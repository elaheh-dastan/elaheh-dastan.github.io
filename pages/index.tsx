import Title from "../components/title";
import React from "react";
import Image from "next/image";
import { GetStaticProps } from "next";

type HomeProps = {
  resumeTag: string;
};

export default function Home({ resumeTag }: HomeProps) {
  return (
    <section id="about" className="bgWhite ofsInBottom">
      <div className="about">
        <Title title="Who am I?" />
        <div className="content">
          <div className="block-content margBSmall">
            <div className="profile margBSmall">
              <h1>Elaheh Dastan</h1>
              <h3>Data Scientist, Backend developer</h3>
            </div>
            <div className="row">
              <div className="col-md-8">
                <p>
                  I am currently a computer engineer student at Amirkabir
                  university of tech and a passionate software engineer at Snapp
                  Cab. I love solving challenges, designing and writing
                  programs.
                </p>
                <br />
                <p>
                  I tend to be a data scientist, I have taken related courses at
                  university and done self learning projects and I can firmly
                  say this is what I want to do in future.
                </p>
                <br />
                <Image
                  src="/me-2.jpg"
                  width={1024}
                  height={1024}
                  alt="Elaheh Dastan"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="button margTop ofsInTop tCenter">
          <div className="row">
            <div className="col-md-12">
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://github.com/elaheh-dastan/elaheh-dastan.pdf/releases/download/${resumeTag}/main.pdf`}
                className="but opc-2"
              >
                <i className="fas fa-paperclip"></i> Here is my CV (updated at{" "}
                {resumeTag})
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const res = await fetch(
    "https://api.github.com/repos/elaheh-dastan/elaheh-dastan.pdf/releases/latest"
  );
  const latest = await res.json();

  return {
    props: {
      resumeTag: latest.tag_name,
    },
  };
};
