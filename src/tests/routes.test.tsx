import { describe, it, expect } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import App from '@/App';

const renderPath = (path: string) => {
  window.history.pushState({}, '', path);
  return render(<App />);
};

describe('App routes render', () => {
  afterEach(() => cleanup());

  it('renders home route "/"', async () => {
    renderPath('/');
    // Badge text unique to home hero
    expect(await screen.findByText(/Creative Marketing Agency/i)).toBeInTheDocument();
  });

  it('renders "/about"', async () => {
    renderPath('/about');
    expect(await screen.findByRole('heading', { name: /About Mimik Creations/i })).toBeInTheDocument();
  });

  it('renders "/services"', async () => {
    renderPath('/services');
    expect(await screen.findByRole('heading', { name: /Our Services/i })).toBeInTheDocument();
  });

  it('renders "/our-work"', async () => {
    renderPath('/our-work');
    expect(await screen.findByRole('heading', { name: /Our Work/i })).toBeInTheDocument();
  });

  it('renders "/contact"', async () => {
    renderPath('/contact');
    expect(await screen.findByRole('heading', { name: /Get in Touch/i })).toBeInTheDocument();
  });
});

