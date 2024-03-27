import api from '../../api/auth';

const SignupService = (userID, userEmail, userPW) => {
    return api.post('/signup', { userID, userEmail, userPW });
};

export { SignupService };