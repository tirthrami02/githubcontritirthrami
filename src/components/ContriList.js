import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ContriList() {
    return (
        <div className="ola flex justify-content-center align-items-center">

            <Card className='github-link m-2' style={{ maxWidth: '1000px' }}>
                <Card.Body>
                    <Card.Title>1</Card.Title>
                    <Card.Text>
                        Content bug: brush: js class is missing html tag in "Propriedades de intância" - javascript reference #4407
                    </Card.Text>
                    <Button href='https://github.com/mdn/translated-content/pull/18320'
                        target="_blank" variant="success">Go to the Repository</Button>
                </Card.Body>
            </Card>

            <Card className='github-link m-2' style={{ maxWidth: '1000px' }}>
                <Card.Body>
                    <Card.Title>2</Card.Title>
                    <Card.Text>
                        Update index.md for ou #18345
                    </Card.Text>
                    <Button href='https://github.com/mdn/translated-content/pull/18345#event-11952988879'
                        target="_blank" variant="success">Go to the Repository</Button>
                </Card.Body>
            </Card>

            <Card className='github-link m-2' style={{ maxWidth: '1000px' }}>
                <Card.Body>
                    <Card.Title>3</Card.Title>
                    <Card.Text>
                        fr_single_double_quote problem fixed #18365
                    </Card.Text>
                    <Button href='https://github.com/mdn/translated-content/pull/18365#event-12374941527'
                        target="_blank" variant="success">Go to the Repository</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ContriList;

