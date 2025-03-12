import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { firstName, lastName, email, contactNo, companyName, projectDetails } = await req.json();

        // Check if environment variables exist
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_HOST || !process.env.EMAIL_PORT) {
            console.error("❌ Missing Email Configuration in Environment Variables");
            return NextResponse.json({ message: "Email configuration is missing" }, { status: 500 });
        }

        // Create a Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT), // Convert port to number
            secure: process.env.EMAIL_PORT === "465", // Use `true` for port 465 (SSL), `false` for 587 (TLS)
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false, // Prevents TLS errors in some cases
            },
        });

        // Verify connection configuration
        await transporter.verify()
            .then(() => console.log("✅ SMTP Server is Ready"))
            .catch(err => {
                console.error("❌ SMTP Connection Error:", err);
                return NextResponse.json({ message: "SMTP connection failed", error: err.message }, { status: 500 });
            });

        // Email content
        const mailOptions = {
            from: `"Kalven IT Contact Form" <${process.env.EMAIL_USER}>`,
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
        console.log("✅ Email Sent Successfully");

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });

    } catch (error) {
        console.error("❌ Error sending email:", error);
        return NextResponse.json({ message: "Error sending email", error: error.message }, { status: 500 });
    }
}
