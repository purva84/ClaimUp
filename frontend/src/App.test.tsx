import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import App from './App';

describe('App smoke test', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ status: 'ok' }),
      })
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders app name and Backend: OK', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Verify app name appears in TopBar
    expect(screen.getByText('Insurance AI Assistant')).toBeInTheDocument();

    // Verify Backend: OK appears once getHealth() resolves
    await waitFor(() => {
      expect(screen.getByText('Backend: OK')).toBeInTheDocument();
    });
  });
});
