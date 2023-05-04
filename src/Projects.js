import React from 'react';
import "./css/Projects.css"

function Projects() {
    return (
        <section>
            <h2>Education</h2>
            <p>Nanyang Technological University, Singapore 2017-2021</p>
            <h2>Job History</h2>
            <ul>
                <li>
                    <h3>Silicon Labs - Validation Engineer (Jun 2021 - Mar 2023) </h3>
                    <p>Main job includes validating the EFR family SOC chips.</p>
                    <br></br>
                    <p>To conduct tests on EFR family chips, I need to write both Python and firmware codes.
                        These codes enabled the execution and analysis of various peripheral tests, such as DAC, ADC, UART, power-saving mechanisms, and more.
                        Python will be used to control the measurement instruments and test flow automation, which is in the form of robotics.
                        On the other hand, firmware will be used to program the chip itself.</p>
                    <br></br>
                    <p>To further enhance the automation of the validation flow, I have designed a PCB board that unlocks new capabilities and allows for even more automation.
                        This board has already been rolled out and tested.</p>
                    <br></br>
                    <p>The measurement instruments that is used include power supply, oscilloscope, switch board, frequency counter, arbitrary wave generator, and others.
                        Additional duty includes fixing hardware issues, which can range from fixing linear actuator, soldering, and duct-taping stuff.</p>
                </li>
                <li>
                    <h3>Whizz Mobility - Embedded Engineer Intern (Jan 2020 - Aug 2020)</h3>
                    <p> Develop the firmware for niche vehicle robot </p>
                </li>
                <li>
                    <h3>MicroSec - Embedded Engineer Intern (Feb 2019 - Nov 2019)</h3>
                    <p> Port fat32 filesystem to Ecos RTOS on proprietary device. </p>
                    <p> Code STM32F303RE microcontroller to connect with Narrow Band-IOT module for testing company product</p>
                </li>
            </ul>


            <h2>Additional Projects</h2>
            <ul>
                <li>
                    <h3>Switching Converter Simulation in LTSpice</h3>
                    <p>Simulate the Volperian model of switching converter in LTSpice, that enables AC stability analysis and load-step analysis </p>
                </li>

            </ul>
            <h2>Undergraduate Research</h2>
            <ul>
                <li>
                    <h3>Implement position determination system without GPS</h3>
                        <p>Using UWB, IMU, and magnetometer on Kalman Filter and Mahony Filter, I implemented an alternative positional determination system. The idea is that this can be used on area without GPS coverage like tunnel and building  </p>
                    <h3>Doing a study on newest error correction model of GPS-like system (GNSS)</h3>
                    <p>The main work I've done for this is coding the error correction algorithm on the tested device (android phone) and implementing the collection of raw data of GNSS measurement from freely available Google API  </p>
                    <p><a href="https://github.com/cocopeanutz/gnss-raw-and-supl/tree/master/GNSSLogger">Source Code</a></p>
                </li>

            </ul>
        </section>
    );
}

export default Projects;