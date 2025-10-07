import Divider from "../components/divider";
import Title from "../components/title";
import React from "react";

function Education() {
  return (
    <section id="education" className="bgWhite ofsInBottom">
      <div className="expertise">
        <Title title="Education" />
        <div className="content">
          <div className="block-content">
            <div className="timeline education">
              <div className="row">
                <div className="col-md-12">
                  <div className="exp-holder margTop">
                    <div className="exp">
                      <div className="hgroup">
                        <h4>B.Sc. Computer Engineering</h4>
                        <h6>
                          <i className="fas fa-calendar"></i>2017 - 2022
                        </h6>
                        <h6>
                          <i className="fas fa-thumbtack"></i>
                          <b className="bold">
                            <a
                              className="gpacolor"
                              href="http://aut.ac.ir/aut/"
                            >
                              Amirkabir University of Technology
                            </a>
                          </b>
                          , Tehran, Iran
                        </h6>
                      </div>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="button margTop ofsInTop tCenter">
          <Divider />
        </div>
      </div>
    </section>
  );
}

export default Education;
