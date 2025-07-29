import jwt from 'jsonwebtoken';

// Middleware: Require user to be signed in (JWT token verification)
export const requireSignIn = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized: Token missing or invalid format',
            });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        next();
    } catch (error) {
        console.error('JWT verification error:', error);
        return res.status(401).json({
            success: false,
            message: 'Unauthorized: Invalid or expired token',
        });
    }
};

// Middleware: Check if user is admin
export const isAdmin = (req, res, next) => {
    try {
        if (req.user && req.user.role === 'admin') {
            return next();
        }

        console.warn(
            `Access denied for user: ${req.user?.id || 'Unknown'} - Role: ${req.user?.role || 'N/A'}`
        );

        return res.status(403).json({
            success: false,
            message: 'Access denied: Admins only',
        });
    } catch (error) {
        console.error('Admin check error:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};
