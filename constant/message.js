// message.js

// General error messages
export const ERROR_MESSAGES = {
    REQUIRED_FIELD: "This field is required.",
    INVALID_EMAIL: "Please enter a valid email address.",
    INVALID_OTP: "Invalid OTP",
    TOO_MANY_OTP_REQUESTS:"Too many OTP requests. Please wait before requesting again.",
    PASSWORD_TOO_SHORT: "Password must be at least 8 characters long.",
    INCORRECT_CURRENT_PASSWORD:"Incorrect current password",
    USER_NOT_FOUND: "User not found.",
    USER_NOT_VERIFIED: "User not verified.",
    VENDOR_NOT_FOUND: "Vendor not found.",
    INCORRECT_EMAIL_PASSWORD: "Incorrect email or password.",
    REGISTERED_BUT_NOT_VERIFIED:"Your email is already registered but not verified. A new OTP has been sent to your email.",
    SAME_AS_CURRENT_PASSWORD: 'New password cannot be the same as the current password',
    UNAUTHORIZED: "Unauthorized access.",
    FORBIDDEN: "You do not have permission to access this resource.",
    SERVER_ERROR: "Internal Server Error",
    VALIDATION_FAILED: "Validation error",
    CATEGORY_NOT_FOUND: "Category not found",
    PARENT_CATEGORY_NOT_FOUND: "Parent category not found",
    PARENT_CATEGORY_MOVE_FAILED: "Cannot move category to its own child",
    PRODUCT_REQUIRED: "Product required",
    NOT_FOUND: "Not found",
    ALREADY_EXIST: "Already exists",
    DELETE_SUBCATEGORY_FAILED: "Cannot delete category with subcategories. Delete subcategories first or move them.",
    UPLOAD_FAILED: "Upload failed, could not connected to file server",
    FILE_TOO_LARGE: "File size too large, max file size: 2 MB",
    INVALID_FILE_KEY: "Invalid file key",
    REMOVE_FAILED: "Remove failed",
    UPDATE_FAILED: (field) => `${field} update failed`,
    ALREADY_VERIFIED: "Already verified",
};

// Validation error messages
export const VALIDATION_ERRORS = {
    REQUIRED: (field) => `The '${field}' field is required.`,
    EMAIL_INVALID: (email) => `Invalid email(${email}) format.`,
    MIN_LENGTH: (min) => `Must be at least ${min} characters long.`,
    MAX_LENGTH: (max) => `Must be no more than ${max} characters long.`,
    SUB_CATEGORY_EXIST: (name) => `The subcategory '${name}' already exist.`,
    CATEGORY_EXIST: (name) => `The category '${name}' already exist.`,
    NOT_FOUND: (name) => `The '${name}' not found`,
    NUMBER: (field) => `The '${field}' must be a number.`,
    INVALID: (field) => `The '${field}' is invalid.`,
    POSITIVE_NUMBER: (field) => `The '${field}' must be a positive number.`,
    NON_NEGATIVE_NUMBER: (field) => `The '${field}' must be a non-floating number.`,
    POSITIVE_INTEGER_NUMBER: (field) => `The '${field}' must be a positive integer number.`,
    ALREADY_EXIST: (field, title) => `The '${field}' - '${title}' already exist.`,
    ALREADY_ADDED: (product) => `The '${product}' already added to cart`,
    ALREADY_VERIFIED: (title) => `The ${title} already verified`,
};

// Specific error messages
export const AUTH_ERRORS = {
    TOKEN_EXPIRED: "Your session has expired. Please log in again.",
    INVALID_CREDENTIALS: "Invalid email or password.",
    EMPTY_TOKEN: 'No token provided',
    INVALID_TOKEN: "Invalid token"
};

// API error messages
export const API_ERRORS = {
    NETWORK_ERROR: "Network error. Please check your connection.",
    API_LIMIT_REACHED: "API rate limit reached. Please try again later.",
};

export const SUCCESS_MESSAGE = {
    LOAD_SUCCESS: (field) => `${field} successfully loaded`,
    REGISTRATION_SUCCESS: "Congratulation you successfully registered",
    PROFILE_UPDATE_SUCCESS: "Profile updated successfully",
    CREATE_SUCCESS: (field) => `${field} successfully created.`,
    CATEGORY_ADD: "Category successfully added",
    CATEGORY_UPDATE: "Category successfully updated",
    CATEGORY_DELETE: "Category deleted successfully",
    ADD_SUCCESS: (field) => `${field} successfully added.`,
    UPDATE_SUCCESS: (field) => `${field} successfully updated.`,
    DELETE_SUCCESS: (field) => `${field} successfully deleted.`,
    UPLOAD_SUCCESS: 'File uploaded successfully.',
    LOGIN_SUCCESS: 'Successfully logged in.',
    ACTIVATION_SUCCESS: (field) => `${field} successfully activated`,
    OTP_VERIFICATION_SUCCESS: "OTP successfully verified",
    OTP_RESENT_SUCCESS:(expirationMinutes) => `otp send to your email. otp will expire in ${expirationMinutes} minutes`,
    ORDER_SUCCESS: 'Your order successfully submitted.',
    ORDER_CANCEL: 'Order successfully canceled.',
    CATEGORY_MOVE: 'Category successfully moved.',
    ORDER_STATUS: (status) => `Order status successfully changed to ${status}.`,
    USER_STATUS: (status) => `User status successfully changed to ${status}.`,
    VENDOR_STATUS: (status) => `Vendor status successfully changed to ${status}.`,
}

export const ROUT_ERR = {
    NOT_FOUND: 'Route not found'
}

export const LOG = {
    DESCRIPTION: (title) => `We receive a ${title} request.`,
    UPDATE: 'Update',
    CREATE: 'Create',
    DELETE: 'Delete',
    GET: 'Get',
    EMAIL: 'Email',
    CANCEL: 'Cancel',
    APPROVED: 'Processing'
}