import { useEffect, useState } from 'react';
import { getHealth } from '../api';

export default function Home() {
  const [status, setStatus] = useState<string>('Backend: Checking...');

  useEffect(() => {
    let isMounted = true;

    getHealth()
      .then((data) => {
        if (isMounted) {
          if (data && data.status === 'ok') {
            setStatus('Backend: OK');
          } else {
            setStatus('Backend: Not reachable');
          }
        }
      })
      .catch(() => {
        if (isMounted) {
          setStatus('Backend: Not reachable');
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">Home</h1>
      <p className="text-lg font-medium text-slate-600">{status}</p>
    </div>
  );
}
