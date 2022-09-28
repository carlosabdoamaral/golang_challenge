import { TopBar } from "../widgets/Topbar";
import {data} from "../static/data/data";
import Card from "react-bootstrap/Card";
import { useEffect } from "react";

export const HomeView = (_) => {
  const aboutSection = data.home.aboutSection
  const partnersSection = data.home.partnersSection
  const knowSection = data.home.knowSection

  useEffect(() => {
    window.document.title = "Avenue | Home";
  });

  return (
    <main>
      <TopBar />

      <section className="p-5 w-75 mx-auto">
        <div className="d-flex justify-content-between align-items-center">
          <h2>{aboutSection.title}</h2>
          <a href={aboutSection.linkURL} target={"_blank"}> {aboutSection.linkText} </a>
        </div>

        <hr />

        <p>{aboutSection.content}</p>
      </section>

      <section className="p-5 w-75 mx-auto">
        <h2>{partnersSection.title}</h2>
        <hr />
        {partnersSection.content.map((partner, i) => (
          <Card className="my-2">
            <Card.Body>
              <b>{partner.title}</b>
            </Card.Body>
          </Card>
        ))}
      </section>

      <section className="p-5 w-75 mx-auto">
        <h2>{knowSection.title}</h2>
        <hr />
        {
          knowSection.content.map( (item, i) => (
            <Card className="my-2">
              <Card.Body>
                <b>{item.title}</b>
              </Card.Body>
              <Card.Footer className="fw-light">
                <small><a href="">More details</a></small>
              </Card.Footer>
            </Card>
          ))
        }
      </section>
    </main>
  );
};