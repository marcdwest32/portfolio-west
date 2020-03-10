import React from 'react';
import { Button, Container } from 'reactstrap';
import BaseLayout from '../components/layouts/BaseLayout';
import 'bootstrap/dist/css/bootstrap.min.css';

const Index = () => {
  return (
    <BaseLayout>
      <Container>
        <Button color='danger'>Danger!</Button>
      </Container>
    </BaseLayout>
  );
};

export default Index;
