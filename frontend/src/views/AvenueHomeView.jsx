import { TopBar } from '../widgets/Topbar';
import {partners_list, partners_title, what_is_avenue_body, what_is_avenue_title } from '../static/data/aboutData';

import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';

export const AvenueHomeView = _ => {

    useEffect( () => {
        window.document.title = "Avenue | Home"
    })

    return (
        <main>
            <TopBar/>

            <section className='p-5 w-75 mx-auto'>
                <div className="d-flex justify-content-between align-items-center">
                    <h2>{what_is_avenue_title}</h2>
                    <a href="https://avenue.us/" target={"_blank"}>Website</a>
                </div>
                <hr/>
                <p>{what_is_avenue_body}</p>
            </section>

            <section className='p-5 w-75 mx-auto'>
                <h2>{partners_title}</h2>
                <hr/>
                {
                    partners_list.map((partner, i) => (
                        <Card className="my-2">
                            <Card.Body>
                                <b>{partner.title}</b>
                                <br/>
                                <small className='fw-light'>{partner.about}</small>
                            </Card.Body>
                        </Card>
                    ))
                }
            </section>
        </main>
    )
}