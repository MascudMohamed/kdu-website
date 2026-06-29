// Simple test script
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

async function testAPI() {
  try {
    // 1. Health check
    console.log('Testing health endpoint...');
    const health = await axios.get(`${BASE_URL}/health`);
    console.log('✅ Health check:', health.data);

    // 2. Register user
    console.log('\nTesting registration...');
    const register = await axios.post(`${BASE_URL}/auth/register`, {
      email: 'test@kduglobal.edu',
      password: 'Test@123456',
      role: 'faculty',
      profile: {
        firstName: 'Test',
        lastName: 'User'
      }
    });
    console.log('✅ Registration successful');
    const token = register.data.token;

    // 3. Login
    console.log('\nTesting login...');
    const login = await axios.post(`${BASE_URL}/auth/login`, {
      email: 'test@kduglobal.edu',
      password: 'Test@123456'
    });
    console.log('✅ Login successful');

    // 4. Get profile
    console.log('\nTesting get profile...');
    const profile = await axios.get(`${BASE_URL}/faculty/profile`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log('✅ Profile retrieved');

    // 5. Get public faculty
    console.log('\nTesting public endpoint...');
    const faculty = await axios.get(`${BASE_URL}/public/faculty`);
    console.log(`✅ Retrieved ${faculty.data.count} faculty members`);

    console.log('\n✅ All tests passed!');
  } catch (error) {
    console.error('❌ Test failed:', error.response?.data || error.message);
  }
}

testAPI();