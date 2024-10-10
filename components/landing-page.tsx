'use client'

import Image from "next/image"
import Logo from "@/components/logo.svg"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function LandingPageComponent() {
    return (
        <div className="min-h-full flex flex-col max-w-[1024px]">
            <div className="min-h-full px-2">
                <header className="w-full py-6 px-4">
                    <div className="container mx-auto flex justify-center max-w-[700px]">
                    <Image src={Logo} alt="" className="invert"/>

                    </div>
                </header>

                <main className="flex-grow container mx-auto px-2 py-8 ">
                    <section className="mb-12">
                        <div className="logoWrapper mb-2">
                            <h1 className="text-center text-3xl pt-1 my-[1px]">About Legacy</h1>
                        </div>

                        <p >
                            We are a company dedicated to providing innovative solutions for our customers. With years of experience and a passionate team, we strive to deliver excellence in everything we do.
                        </p>
                    </section>

                    <section>
                        <div className="logoWrapper">
                            <h1 className="text-center text-3xl pt-1 my-[1px]">Frequently Asked Questions</h1>
                        </div>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>What services do you offer?</AccordionTrigger>
                                <AccordionContent>
                                    We offer a wide range of services including web development, mobile app development, and cloud solutions. Our team is skilled in various technologies to meet your specific needs.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger>How can I get in touch with your team?</AccordionTrigger>
                                <AccordionContent>
                                    You can reach out to us through our contact form on the website, or by emailing us at support@example.com. We aim to respond to all inquiries within 24 hours.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger>Do you offer custom solutions?</AccordionTrigger>
                                <AccordionContent>
                                    Yes, we specialize in creating custom solutions tailored to your specific business needs. Our team will work closely with you to understand your requirements and deliver a solution that fits perfectly.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </section>
                </main>
            </div>

            <footer className="w-full py-4 px-4">
                <div className="container mx-auto text-center text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} Armada Legacy. All rights reserved.</p>
                <p className="mt-2">
                    Disclaimer: This website is for informational purposes only. The content provided is not intended to be a substitute for professional advice. Always seek the advice of qualified professionals regarding your specific circumstances.
                </p>
                </div>
            </footer>
        </div>
    )
}