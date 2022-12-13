
import Card from 'react-bootstrap/Card';

import { MosqueServicesItem } from './MosqueServicesItem';
import { Mosque } from '../../constants/labels'
import serviceDetail from '../../types/services'
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';


import './MosqueServices.css';

function MosqueServices() {
    const mosqueServiceList: serviceDetail[] = [
        {
            id: 1,
            title: "Quran Education",
            description: `${Mosque.description} provide services to teach fundamentals of Islamic faith, Quran, Hadith and moral principles of the religion of Islam.`,
            imagePath: "images/Quran-teaching-service.png",
            imageAlt: "Quran",
            actionTitle: "Contact Us",
            actionPath: "/contact-us"
        },
        {
            id: 2,
            title: "Counseling",
            description: `The ${Mosque.description} strives to serve the Ottawa Muslim Community by providing a wide array of services to improve their spiritual and mental wellbeing.`,
            imagePath: "images/counseling-service-1.png",
            imageAlt: "Counseling",
            actionTitle: "Contact Us",
            actionPath: "/contact-us"
        },
        {
            id: 1,
            title: "Marriage/Nikah Services",
            description: `The ${Mosque.description} provides Nikah (marriage) services. You can contact the Masjid or Imam for marriage/nikah to follow the procedures.`,
            imagePath: "images/nikha-service.jpg",
            imageAlt: "Nikah",
            actionTitle: "Contact Us",
            actionPath: "/contact-us"
        }
    ]

    return (
        <Row>
            <div className='mosque-services-card'>
                <Card>
                    <Card.Header>
                        Services Provided by {Mosque.title}
                    </Card.Header>
                    <Card.Body className="text-center">
                        <Card.Title>Services</Card.Title>
                        <Row xs={1} md={2} className="g-4" style={{ justifyContent: 'space-evenly', padding: '50px' }}>
                            {mosqueServiceList.map((mosqueService: serviceDetail, index) => (
                                <MosqueServicesItem
                                    mosqueServiceDetail={mosqueService}
                                    key={index}
                                />

                            ))}
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        </Row>
    );
}

export default MosqueServices;