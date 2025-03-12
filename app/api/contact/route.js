
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { firstName, lastName, email, contactNo, companyName, projectDetails } = await req.json();

        // Log environment variables (remove this in production)
        console.log("EMAIL_USER:", process.env.EMAIL_USER);
        console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Not Loaded");

        // Check if credentials exist
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            return NextResponse.json({ message: "Email credentials not found" }, { status: 500 });
        }

        // Create a Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: false, // Use `true` for port 465, `false` for 587
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Your email to receive messages
            subject: "New Contact Form Submission",
            text: `
                Name: ${firstName} ${lastName}
                Email: ${email}
                Contact No: ${contactNo}
                Company Name: ${companyName}
                Project Details: ${projectDetails}
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });

    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ message: "Error sending email", error: error.message }, { status: 500 });
    }
}
