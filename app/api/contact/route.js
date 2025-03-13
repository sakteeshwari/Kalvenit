import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { firstName, lastName, email, contactNo, companyName, projectDetails } = await req.json();

        // Validate required fields
        if (!firstName || !lastName || !email || !contactNo || !companyName || !projectDetails) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }

        // Check environment variables
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error("❌ Missing Email Configuration in Environment Variables");
            return NextResponse.json({ message: "Email configuration is missing" }, { status: 500 });
        }

        // Create a Nodemailer transporter for Gmail
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, // Use App Password instead of Gmail password
            },
        });

        // Verify SMTP connection
        try {
            await transporter.verify();
            console.log("✅ SMTP Server is Ready");
        } catch (err) {
            console.error("❌ SMTP Connection Error:", err);
            return NextResponse.json({ message: "SMTP connection failed", error: err.message }, { status: 500 });
        }

        // Email content
        const mailOptions = {
            from: `"Kalven IT Contact Form" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER, // Receiving email
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
        console.log("✅ Email Sent Successfully");

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });

    } catch (error) {
        console.error("❌ Error sending email:", error);
        return NextResponse.json({ message: "Error sending email", error: error.message }, { status: 500 });
    }
}
