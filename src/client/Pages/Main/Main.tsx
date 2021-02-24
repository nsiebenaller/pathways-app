import { Icon } from "ebrap-ui";
import React from "react";
import * as css from "./styled";

const individualStudents = {
    title: "Individual Students",
    items: [
        "coaching",
        "recruiting",
        "competition experience",
        "nutrition plan",
        "career guidance",
    ],
};
const highSchoolEsports = {
    title: "High School Esports",
    items: [
        "coaching",
        "recruiting",
        "league hosting",
        "league management",
        "consulting",
    ],
};
const collegiateEsports = {
    title: "Collegiate Esports",
    items: [
        "coaching",
        "recruiting",
        "league hosting",
        "league management",
        "arena design",
        "consulting",
    ],
};
const opportunities = {
    title: "Opportunities",
    items: ["casting", "production", "editing", "post-production"],
};

export default function Main() {
    return (
        <main>
            <css.HeroContainer>
                <css.TopNav>
                    <css.Title>
                        TEAM<b>META</b>
                    </css.Title>
                    <css.Menu>
                        <Icon iconName={"Menu"} color={"grey"} cursorPointer />
                    </css.Menu>
                </css.TopNav>
                <css.MainHeroImage src={"/assets/home_hero.png"} />
            </css.HeroContainer>
            <css.WhiteContainer>
                <css.WhiteImage src={"/assets/white_lines_bg.png"} />
                <css.InnerContent>
                    <css.CallToAction>
                        Whether you're a college coach that needs help with
                        Esports program development and recruiting, or an
                        Esports athlete looking for professional instruction and
                        coaching to improve your skill level, TeamMeta is your
                        Esports partner.
                    </css.CallToAction>
                </css.InnerContent>
            </css.WhiteContainer>
            <css.CardContainer>
                <css.CardWrapper>
                    <css.CardSectionTitle>
                        TeamMETA partners with:
                    </css.CardSectionTitle>

                    <css.CardList>
                        <HomeCard {...individualStudents} />
                        <HomeCard {...highSchoolEsports} />
                        <HomeCard {...collegiateEsports} />
                        <HomeCard {...opportunities} />
                    </css.CardList>
                </css.CardWrapper>
            </css.CardContainer>
        </main>
    );
}

interface HomeCardProps {
    title: string;
    items: Array<string>;
}
function HomeCard(props: HomeCardProps) {
    return (
        <css.Card>
            <css.CardTitle>{props.title}</css.CardTitle>
            <css.CardItems>
                {props.items.map((item, key) => (
                    <li key={key}>{item}</li>
                ))}
            </css.CardItems>
            <css.CardLink>learn more {"->"}</css.CardLink>
        </css.Card>
    );
}
