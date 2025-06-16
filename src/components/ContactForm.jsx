import { useState } from 'react';

/**
 * Modern, animated contact form with visual feedback
 */
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    errorMessage: ''
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        errorMessage: 'Please fill in all required fields.' // Corrected typo
      });
      
      const form = e.target;
      form.classList.add('animate-shake'); // Ensure animate-shake is defined in global.css or tailwind.config.js
      setTimeout(() => form.classList.remove('animate-shake'), 600); // Increased duration for better visibility
      
      return;
    }
    
    try {
      setFormState(prev => ({ ...prev, isSubmitting: true, isError: false, errorMessage: '' })); // Clear previous errors
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Failed to send message. Please try again.' }));
        throw new Error(errorData.message || 'Failed to send message. Please try again.');
      }
      
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFocusedField(null); // Reset focused field
      setFormState({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        errorMessage: ''
      });
    } catch (error) {
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        errorMessage: error.message || 'Something went wrong. Please try again later.'
      });
    }
  };

  if (formState.isSubmitted) {
    return (
      <div className="bg-success-50 dark:bg-success-900/30 border border-success-300 dark:border-success-700 rounded-xl p-8 text-center animate-fade-in-up shadow-lg">
        <div className="text-success-600 dark:text-success-400 mb-4">
          {/* ... existing success SVG ... */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-success-800 dark:text-success-200 mb-2">Message Sent Successfully!</h3>
        <p className="text-success-700 dark:text-success-300 mb-6">
          Thank you for reaching out. I'll get back to you as soon as possible.
        </p>
        <button 
          onClick={() => setFormState({ isSubmitting: false, isSubmitted: false, isError: false, errorMessage: '' })}
          className="btn btn-primary hover:btn-primary-dark focus:ring-primary-500/50 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="space-y-8 p-6 md:p-8 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-gray-200 dark:border-slate-700 transition-all duration-300"
      noValidate // Prevent browser validation, rely on custom
    >
      {formState.isError && (
        <div className="bg-danger-50 dark:bg-danger-900/30 border border-danger-300 dark:border-danger-700 rounded-lg p-4 mb-6 animate-fade-in-down shadow-md">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-danger-500 dark:text-danger-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-danger-700 dark:text-danger-200">
                {formState.errorMessage}
              </p>
            </div>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
        {/* Name Field */}
        <div className="relative group">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => handleFocus('name')}
            onBlur={handleBlur}
            className={`form-input peer ${(formState.isError && !formData.name) ? 'border-danger-500 dark:border-danger-400 focus:border-danger-500 focus:ring-danger-500/50' : 'focus:border-primary-500 dark:focus:border-primary-400 focus:ring-primary-500/30'}`}
            required
            aria-describedby={ (formState.isError && !formData.name) ? "name-error" : undefined }
          />
          <label 
            htmlFor="name"
            className={`form-label peer-focus:form-label-focused ${ (focusedField === 'name' || formData.name) ? 'form-label-focused' : ''} ${(formState.isError && !formData.name) ? 'text-danger-500 dark:text-danger-400' : 'text-gray-500 dark:text-gray-400 peer-focus:text-primary-600 dark:peer-focus:text-primary-300'}`}
          >
            Full Name*
          </label>
          {(formState.isError && !formData.name) && <p id="name-error" className="mt-1 text-xs text-danger-600 dark:text-danger-400">Name is required.</p>}
        </div>
        
        {/* Email Field */}
        <div className="relative group">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => handleFocus('email')}
            onBlur={handleBlur}
            className={`form-input peer ${(formState.isError && !formData.email) ? 'border-danger-500 dark:border-danger-400 focus:border-danger-500 focus:ring-danger-500/50' : 'focus:border-primary-500 dark:focus:border-primary-400 focus:ring-primary-500/30'}`}
            required
            aria-describedby={ (formState.isError && !formData.email) ? "email-error" : undefined }
          />
          <label 
            htmlFor="email"
            className={`form-label peer-focus:form-label-focused ${ (focusedField === 'email' || formData.email) ? 'form-label-focused' : ''} ${(formState.isError && !formData.email) ? 'text-danger-500 dark:text-danger-400' : 'text-gray-500 dark:text-gray-400 peer-focus:text-primary-600 dark:peer-focus:text-primary-300'}`}
          >
            Email Address*
          </label>
          {(formState.isError && !formData.email) && <p id="email-error" className="mt-1 text-xs text-danger-600 dark:text-danger-400">A valid email is required.</p>}
        </div>
      </div>
      
      {/* Subject Field */}
      <div className="relative group">
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          onFocus={() => handleFocus('subject')}
          onBlur={handleBlur}
          className="form-input peer focus:border-primary-500 dark:focus:border-primary-400 focus:ring-primary-500/30"
        />
        <label 
          htmlFor="subject"
          className={`form-label peer-focus:form-label-focused ${ (focusedField === 'subject' || formData.subject) ? 'form-label-focused' : ''} text-gray-500 dark:text-gray-400 peer-focus:text-primary-600 dark:peer-focus:text-primary-300`}
        >
          Subject (Optional)
        </label>
      </div>
      
      {/* Message Field */}
      <div className="relative group">
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => handleFocus('message')}
          onBlur={handleBlur}
          rows="5"
          className={`form-input peer resize-none ${(formState.isError && !formData.message) ? 'border-danger-500 dark:border-danger-400 focus:border-danger-500 focus:ring-danger-500/50' : 'focus:border-primary-500 dark:focus:border-primary-400 focus:ring-primary-500/30'}`}
          required
          aria-describedby={ (formState.isError && !formData.message) ? "message-error" : undefined }
        ></textarea>
        <label 
          htmlFor="message"
          className={`form-label peer-focus:form-label-focused ${ (focusedField === 'message' || formData.message) ? 'form-label-focused' : ''} ${(formState.isError && !formData.message) ? 'text-danger-500 dark:text-danger-400' : 'text-gray-500 dark:text-gray-400 peer-focus:text-primary-600 dark:peer-focus:text-primary-300'}`}
        >
          Your Message*
        </label>
        {(formState.isError && !formData.message) && <p id="message-error" className="mt-1 text-xs text-danger-600 dark:text-danger-400">Message cannot be empty.</p>}
      </div>
      
      <div className="flex justify-end pt-2">
        <button
          type="submit"
          disabled={formState.isSubmitting}
          className="btn btn-lg btn-primary w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-primary-500/50 shadow-md hover:shadow-lg"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          {formState.isSubmitting ? (
            <span className="relative flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            <span className="relative">Send Message</span>
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;