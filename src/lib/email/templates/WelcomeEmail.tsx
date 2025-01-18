import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface WelcomeEmailProps {
  username: string;
  loginUrl?: string;
}

export const WelcomeEmail = ({
  username = 'there',
  loginUrl = 'https://app.boco.ai/login',
}: WelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Welcome to boco.ai - Your journey begins here!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Welcome to boco.ai! 🚀</Heading>
          
          <Text style={text}>Hi {username},</Text>
          
          <Text style={text}>
            We're thrilled to have you on board! Thank you for choosing boco.ai
            for your business needs. We're confident that our platform will help you
            achieve your goals and streamline your operations.
          </Text>

          <Section style={buttonContainer}>
            <Button style={button} href={loginUrl}>
              Get Started
            </Button>
          </Section>

          <Text style={text}>
            Here's what you can do next:
          </Text>

          <ul style={list}>
            <li>Complete your profile setup</li>
            <li>Explore our features and integrations</li>
            <li>Check out our documentation</li>
            <li>Connect with our community</li>
          </ul>

          <Hr style={hr} />

          <Text style={footer}>
            If you have any questions, feel free to{' '}
            <Link href="mailto:support@boco.ai" style={link}>
              reach out to our support team
            </Link>
            . We're here to help!
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeEmail;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const h1 = {
  color: '#1f2937',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '1.25',
  padding: '0 48px',
};

const text = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
  padding: '0 48px',
};

const buttonContainer = {
  padding: '27px 0 27px',
};

const button = {
  backgroundColor: '#5850ec',
  borderRadius: '6px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '100%',
  padding: '12px 0',
};

const list = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '24px',
  padding: '0 48px',
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '20px 0',
};

const footer = {
  color: '#666666',
  fontSize: '14px',
  lineHeight: '24px',
  padding: '0 48px',
};

const link = {
  color: '#5850ec',
  textDecoration: 'underline',
}; 