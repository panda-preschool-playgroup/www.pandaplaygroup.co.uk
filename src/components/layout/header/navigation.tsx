import { FC } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Navbar } from "flowbite-react";
import NavigationSection from "@/components/layout/header/navigation-section";
import LinkButton from "@/components/common/link-button";

interface NavigationProps {
    activeSection?: string;
}

const Navigation: FC<NavigationProps> = ({ activeSection }: NavigationProps) => {
    return (
        <Navbar
            fluid
            className="bg-yellow-light h-42"
            theme={{ inner: { base: "mx-3 flex flex-wrap items-center justify-between gap-y-5 gap-x-5" } }}
        >
            <Navbar.Brand as="div">
                <Link to="/" className="flex items-center w-full gap-x-10 no-underline" aria-label="Home">
                    <StaticImage
                        src="../../../images/logo.png"
                        alt="Panda Pre-School Playgroup Logo"
                        width={125}
                        height={125}
                    />
                    <h1 className="text-2xl md:text-3xl font-kg-second-chances">PANDA PRE-SCHOOL PLAYGROUP</h1>
                </Link>
            </Navbar.Brand>
            <Navbar.Collapse className="order-1">
                <NavigationSection
                    title="Sessions"
                    menuItems={[
                        { title: "Playgroup", href: "#" },
                        { title: "Sticky Mitts & Tiny Tots", href: "#" },
                    ]}
                    activeSection={activeSection}
                />
                <NavigationSection
                    title="New pandas"
                    menuItems={[
                        { title: "Settling in", href: "#" },
                        { title: "Virtual tour", href: "#" },
                        { title: "Prospectus", href: "#" },
                        { title: "Fees", href: "#" },
                    ]}
                    activeSection={activeSection}
                />
                <NavigationSection
                    title="Our team"
                    menuItems={[
                        { title: "Staff", href: "#" },
                        { title: "Committee", href: "#" },
                    ]}
                    activeSection={activeSection}
                />
                <NavigationSection
                    title="Funding"
                    menuItems={[
                        { title: "Charitable framework", href: "#" },
                        { title: "Fundraising", href: "#" },
                        { title: "Panda pals", href: "#" },
                    ]}
                    activeSection={activeSection}
                />
            </Navbar.Collapse>
            <div className="flex md:order-2 w-full md:w-auto justify-between">
                <LinkButton text="Admissions" href="#" />
                <Navbar.Toggle
                    theme={{
                        base: "inline-flex items-center text-slate-500 focus:text-slate-600 hover:text-slate-600 text-sm md:hidden",
                    }}
                />
            </div>
        </Navbar>
    );
};

export default Navigation;