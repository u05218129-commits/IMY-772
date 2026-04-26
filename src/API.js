const BASE_URL = 'http://localhost:5000/api';

// Admin and researchers login function.
export async function loginAdmin(email, password) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ email, password })
  });
  return res.json();
}

// A report is submitted to the backend
export async function submittingReport(data) {
  const res = await fetch(`${BASE_URL}/reports/submit`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  });
  return res.json();
}

// Gathering the users that haven't been approved yet.
export async function getPendingUsers(token) {
  const res = await fetch(`${BASE_URL}/admin/pending-users`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json', 'authorization': token}
  });
  return res.json();
}

// Only admin users can approve the researchers account. 
export async function approveUser(id, token) {
  const res = await fetch(`${BASE_URL}/admin/approve-user/${id}`, {method: 'PUT',
   headers: {'Content-Type': 'application/json','authorization': token}
  });
  return res.json();
}
