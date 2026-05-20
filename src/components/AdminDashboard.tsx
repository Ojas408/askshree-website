import { useState, useEffect } from 'react';
import { database, ContactSubmission } from '../utils/database';

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  // Simple password protection (in production, use proper authentication)
  const ADMIN_PASSWORD = 'askshree2024';

  useEffect(() => {
    if (isAuthenticated) {
      loadSubmissions();
    }
  }, [isAuthenticated]);

  const loadSubmissions = () => {
    const data = database.getAllSubmissions();
    setSubmissions(data.sort((a, b) => b.id - a.id));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      alert('Incorrect password');
    }
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this submission?')) {
      database.deleteSubmission(id);
      loadSubmissions();
    }
  };

  const handleExport = () => {
    const json = database.exportToJSON();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `askshree-submissions-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Admin Dashboard</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter admin password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600 text-center">
            Default password: askshree2024
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Contact Submissions</h1>
              <p className="text-gray-600 mt-2">Total: {submissions.length} submissions</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleExport}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Export JSON
              </button>
              <button
                onClick={() => {
                  setIsAuthenticated(false);
                  setSubmissions([]);
                }}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>

          {submissions.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <p className="text-gray-600 text-lg">No submissions yet</p>
            </div>
          ) : (
            <div className="space-y-4">
              {submissions.map((submission) => (
                <div key={submission.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{submission.name}</h3>
                      <p className="text-sm text-gray-600">
                        {new Date(submission.timestamp).toLocaleString()}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDelete(submission.id)}
                      className="text-red-600 hover:text-red-700 font-semibold"
                    >
                      Delete
                    </button>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-sm font-semibold text-gray-700">Email:</span>
                      <p className="text-gray-900">
                        <a href={`mailto:${submission.email}`} className="text-blue-600 hover:underline">
                          {submission.email}
                        </a>
                      </p>
                    </div>
                    {submission.phone && (
                      <div>
                        <span className="text-sm font-semibold text-gray-700">Phone:</span>
                        <p className="text-gray-900">
                          <a href={`tel:${submission.phone}`} className="text-blue-600 hover:underline">
                            {submission.phone}
                          </a>
                        </p>
                      </div>
                    )}
                    {submission.company && (
                      <div>
                        <span className="text-sm font-semibold text-gray-700">Company:</span>
                        <p className="text-gray-900">{submission.company}</p>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <span className="text-sm font-semibold text-gray-700">Message:</span>
                    <p className="text-gray-900 mt-2 whitespace-pre-wrap">{submission.message}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
