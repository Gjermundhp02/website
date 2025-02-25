import Image from "next/image";

import styles from "./styles.module.css"

export default function Home() {
  return (
    <div>
        <div className={styles.mainBackground}>   
            <div className={styles.description}>
                <h1>Gjermund H. Pedersen</h1>
                <p>
                    I&lsquo;m a student at NTNU Gjøvik doing my bachelor in programming.
                </p>
                <p>
                    I&lsquo;m the leder of the technical committee at the student union LOGIN. There i manage a team of 10 people and we are responsible for the technical aspects of the student union.
                </p>
                <p>
                    I&lsquo;m mostly experienced in frontend development, but i also have some experience with backend. I hvave mostly worked with React Native, Typescript and Go. On the backend i have mostly helped with debugging the kubernetis cluster and the backend services.
                </p>
            </div>
            <div className={styles.social}>
                <h3>Social</h3>
                <a href="https://www.linkedin.com/in/gjermund-h-pedersen-a077b1291/" target="_blank">
                    <Image src="/LI-In-Bug-croped.png" alt="Linkedin" width={50} height={50}/>
                    Linkedin
                </a>
                <a href="https://discordapp.com/users/260370482757500938" target="_blank">
                    <Image src="/discord-mark-blue.svg" alt="Discord" width={50} height={50}/>
                    Discord
                </a>
                <a href="https://github.com/Gjermundhp02" target="_blank">
                    <Image src="/github-mark-white.svg" alt="Github" width={50} height={50}/>
                    Github
                </a>
            </div>
        </div>
        <div className={styles.projects}>
            <h1 style={{gridColumn: "1/-1", textAlign: "center"}}>Projects</h1>
            <p>
                HEllo
            </p>
            <p>
                dasds
            </p>
            <p>
                dasadd
            </p>
        </div>
    </div>
  );
}
