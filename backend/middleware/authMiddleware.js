import jwt from 'jsonwebtoken';

export const requireSignIn = async (req, res, next) => {
    try {
        const decoded = await jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ success: false, message: "Unauthorized: Invalid token" });
    }
};

// admin access
export const isAdmin = async (req, res, next) => {
    try {
        if (req.user && req.user.role === 'admin') {
            next();
        } else {
            return res.status(403).json({
                success: false,
                message: "Access denied: Admins only"
            });
        }
    } catch (error) {
        console.error("Admin check error:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};