import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import serviceDetail from '../../types/services'
import './MosqueServices.css';


interface Props {
    mosqueServiceDetail: serviceDetail
}

export const MosqueServicesItem: React.FC<Props> = ({
    mosqueServiceDetail
}) => {
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={mosqueServiceDetail.imagePath} alt={mosqueServiceDetail.imageAlt} />
                <Card.Body>
                    <Card.Title>{mosqueServiceDetail.title}</Card.Title>
                    <Card.Text style={{ textAlign: 'left' }}>
                        {mosqueServiceDetail.description}
                    </Card.Text>

                </Card.Body>
                <Card.Footer>
                    <div>
                        <small className="text-muted">For more details: </small>
                        <Button href={mosqueServiceDetail.actionPath} variant="primary">{mosqueServiceDetail.actionTitle}</Button>
                    </div>

                </Card.Footer>
            </Card>
        </Col>
    );
};