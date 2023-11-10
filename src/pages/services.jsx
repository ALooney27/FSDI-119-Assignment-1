import React, { useEffect, useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./services.css";
import DataService from "../services/dataService";

function Services() {
    const [allData, setAllData] = useState([]);
    const [toName, setToName] = useState("");
    const [fromName, setFromName] = useState("");
    const [selected, setSelected] = useState({
        brick: false,
        concrete: false,
        grill: false,
        pool: false,
        existing: false,
        new: false,
        quote: false,
        info: false,
        residential: false,
        commercial: false,
    });

    async function loadData() {
        const data = await DataService.getServices();
        setAllData(data);
    }

    function handleSelection(item) {
        console.log("Selected", item);
    }

    //on loading, call the service
    useEffect(() => {
        loadData();
    }, []);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        console.log(selected);

        let message = "The user selected the following services: ";

        if (selected.brick) {
            message += "\n - Brick ";
        }

        if (selected.concrete) {
            message += "\n - Concrete ";
        }

        if (selected.grill) {
            message += "\n - Custom Grill ";
        }

        if (selected.pool) {
            message += "\n - Custom Pool ";
        }

        let reason = "The user is looking for help with: ";

        if (selected.existing) {
            reason += "\n - Existing project ";
        }

        if (selected.new) {
            reason += "\n - New project ";
        }

        if (selected.quote) {
            reason += "\n - Looking for a quote ";
        }

        if (selected.info) {
            reason += "\n - Information about products ";
        }

        let location = "The users location type is: ";

        if (selected.residential) {
            location += "\n - Residential ";
        }

        if (selected.commercial) {
            location += "\n - Commercial ";
        }

        message += "\n\n" + reason
        message += "\n\n" + location

        const formData = {
            "message": message,
            "to_name": toName,
            "from_name": fromName,
        }

        emailjs.send('service_g8dntz6', 'template_kkscigg', formData, 'WXy3kMBN5p6SX-Oji')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
                form.current.reset()
            }, (error) => {
                console.log(error.text);
            });
    };

    const handleCheckChanges = (e) => {
        console.log("check changed", e.target.value, e.target.checked);

        setSelected({
            ...selected,
            [e.target.value]: e.target.checked
        })
    }

    return (
        <div className="services page">
            <br />
            <h1>Services We Provide</h1>
            <br />
            <div>
                <p id="serviceBio">Looking into your next project for your home? Creative Concrete has exactly what it is you're looking for.
                    Our company offers various services for your next project such as Decorative Rocks/DG,
                    Mow Curbs, Stamped Concrete, Retaining/Block Walls,
                    Colored Concrete, Pools, Drive Ways, Custome Built Firepits/BBQ and much more.</p>
            </div>

            <div className="row">
                {allData.map(item =>
                    <div className='col' id="rowService" key={item.id} onClick={() => handleSelection(item)}>
                        <img src={item.image} alt="" />
                        <h5>{item.title}</h5>
                        <h7>{item.description}</h7>
                    </div>
                )}
            </div>
            <br />
            <br />

            <h2>We also specialize in</h2>

            <div>
                <li>Drought Tolerant Landscape</li>
                <li>SOD</li>
                <li>Artificial Turf</li>
                <li>Plants</li>
                <li>Irrigation</li>
                <br />
                <br />
            </div>

            <form ref={form} onSubmit={sendEmail}>

                <label>Name</label>
                <input className="type-group-item me-5" type="text" name="to_name" onChange={e => setToName(e.target.value)} />
                <label>Email</label>
                <input type="email" name="from_name" onChange={e => setFromName(e.target.value)} />
                <div id="checkBoxes">
                    <ul className="list-group">
                        <h5>Please select item or items that you are interested in.</h5>
                        <br />
                        <li className="list-group-item">
                            <input className="form-check-input me-1" type="checkbox" value='brick' onChange={handleCheckChanges} />
                            <label className="form-check-label" for="firstCheckbox">Brick</label>

                            {selected.brick ? <p>Tell me more</p> : null}
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" type="checkbox" value='concrete' onChange={handleCheckChanges} />
                            <label className="form-check-label" for="secondCheckbox">Concrete</label>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" type="checkbox" value='grill' onChange={handleCheckChanges} />
                            <label className="form-check-label" for="thirdCheckbox">Custom Grill</label>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" type="checkbox" value='pool' onChange={handleCheckChanges} />
                            <label className="form-check-label" for="fourthCheckbox">Custom Pool</label>
                        </li>
                    </ul>
                    <br />
                    <ul className="list-group">
                        <h5>To better assist you, please let us know about your request.</h5>
                        <br />
                        <li className="list-group-item">
                            <input className="form-check-input me-1" type="checkbox" value='existing' onChange={handleCheckChanges} />
                            <label className="form-check-label" for="firstCheckbox">Existing project</label>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" type="checkbox" value='new' onChange={handleCheckChanges} />
                            <label className="form-check-label" for="secondCheckbox">New Project</label>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" type="checkbox" value='quote' onChange={handleCheckChanges} />
                            <label className="form-check-label" for="thirdCheckbox">Looking for a quote.</label>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" type="checkbox" value='info' onChange={handleCheckChanges} />
                            <label className="form-check-label" for="fourthCheckbox">Information about products</label>
                        </li>
                    </ul>
                    <br />
                </div>
                <h5>Please select location type.</h5>
                <ul id="residence_type">
                    <li className="type-group-item me-5">
                        <input className="form-check-input me-1" type="checkbox" value='residential' onChange={handleCheckChanges} />
                        <label className="form-check-label" for="firstTypeCheckbox">Residential</label>
                    </li>
                    <li className="type-group-item">
                        <input className="form-check-input me-1" type="checkbox" value='commercial' onChange={handleCheckChanges} />
                        <label className="form-check-label" for="secondTypeCheckbox">Commercial</label>
                    </li>
                </ul>
                <br />
                <input type="submit" value="Send" />
            </form>

            <br />
            <br />
        </div>

    )
}

export default Services;