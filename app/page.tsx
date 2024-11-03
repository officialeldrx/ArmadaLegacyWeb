import Image from "next/image"
import Logo from "@/components/logo.svg"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
    return (
        <div className="min-h-full flex flex-col max-w-[1024px]">
            <div className="min-h-full px-2">
                <header className="w-full py-6 px-4">
                    <div className="container mx-auto flex justify-center max-w-[700px]">
                        <Image src={Logo} alt="" className="invert" />

                    </div>
                </header>

                <main className="flex-grow container mx-auto px-2 py-8 ">
                    <section className="mb-12">
                        <h1>About Legacy</h1>

                        <p >
                            Armada Legacy is a collaborative effort to craft community expansions and rebalances for Star Wars: Armada that rival the quality of those produced by Fantasy Flight Games (FFG). It stands as a testament to the collective creativity and dedication of the Star Wars: Armada community. Born from a shared vision to create fun and interesting Armada content. We seek to grow the community through new exciting releases. Legacy recognizes the Armada Ruleset Collective (ARC), and will adapt Legacy content to ARC changes.
                        </p>
                    </section>

                    <section>
                        <h1>Frequently Asked Questions</h1>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Does Legacy sell plastic ships, stands, cards, or cardboard?</AccordionTrigger>
                                <AccordionContent>
                                    No, Armada Legacy does not sell plastic ships, stands, cards, or cardboard components. We provide free downloadable documents, Table Top Simulator integration, and fleet-building software. You will need to source your own ships, stands, and printing methods for our content. Please note that we are not affiliated with any stores or manufacturers that produce these products. Our focus is on creating high-quality, balanced content for the community to enjoy. For convenience, we have created repository with links to many vendors to help source different products at <a href="/resources" style={{ color: 'var(--logoColor)' }}>https://www.armadalegacy.com/resources</a>.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger>What is the difference between other Homebrew content and Armada Legacy? </AccordionTrigger>
                                <AccordionContent>
                                    While some Homebrew content is great, it often lacks balance, thorough testing, and is difficult to weed through it all. Armada Legacy leverages a dedicated team, focused on developing balanced content through rigorous playtesting, constant re-evaluation, and community feedback. Consisting of tournament organizers, prior FFG/AMG play testers, prior world champions, and other skillful volunteers. We provide top tier content with play available on tabletop simulator, and a fleet builder with up to date Legacy content.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger>What is the difference between Legacy and ARC?</AccordionTrigger>
                                <AccordionContent>
                                    ARC will focus on rules interpretation, gameplay standards, and maintaining current rules standings for judges to leverage, including changes for gameplay health. Legacy creates content for unofficial play and will honor ARC changes to maintain game interoperability. Please see the ARC release statement for more information <a style={{ color: 'var(--logoColor)' }} href="https://www.reddit.com/r/StarWarsArmada/comments/1eniswp/introducing_arc_the_armada_ruleset_collective/">here</a>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </section>
                </main>
                <footer className="w-full py-4 px-4">
                    <div className="container mx-auto text-center text-sm text-muted-foreground">
                        <p>© {new Date().getFullYear()} Armada Legacy. All rights reserved.</p>
                        <p className="mt-2">
                            Disclaimer: Armada Legacy is a free, unofficial modification for Star Wars: Armada.
                        </p>
                    </div>
                </footer>
            </div>

        </div>
    );
}
