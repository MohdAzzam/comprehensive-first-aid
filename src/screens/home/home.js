import React from 'react';
import { Card } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

export default function Home() {
    return (

        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title><FormattedMessage id='home.title' /></Card.Title>
                </Card.Body>
            </Card>
        </div>

    );
}