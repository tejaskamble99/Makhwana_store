import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "../../styles/admin/dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h1>E-commerce Dashboard</h1>
          <p>Overview of your store's performance and management tools.</p>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Orders</Card.Title>
              <Card.Text>Manage and view all orders.</Card.Text>
              <Button variant="primary" onClick={() => navigate('/admin/orders')}>View Orders</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Products</Card.Title>
              <Card.Text>Add, edit, or remove products.</Card.Text>
              <Button variant="primary" onClick={() => navigate('/admin/products')}>Manage Products</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Customers</Card.Title>
              <Card.Text>View customer details and activity.</Card.Text>
              <Button variant="primary" onClick={() => navigate('/admin/customers')}>View Customers</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Analytics</Card.Title>
              <Card.Text>Track sales and performance metrics.</Card.Text>
              <Button variant="primary" onClick={() => navigate('/admin/analytics')}>View Analytics</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Settings</Card.Title>
              <Card.Text>Configure store settings and preferences.</Card.Text>
              <Button variant="primary" onClick={() => navigate('/admin/settings')}>Store Settings</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};


export default Dashboard;




