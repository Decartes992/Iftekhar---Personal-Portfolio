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
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        errorMessage: 'Please fill in all required fields'
      });
      
      // Add shake animation to form
      const form = e.target;
      form.classList.add('animate-shake');
      setTimeout(() => form.classList.remove('animate-shake'), 500);
      
      return;
    }
    
    try {
      setFormState(prev => ({ ...prev, isSubmitting: true }));
      
      // Send form data to the server
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      // Reset form and show success message
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
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
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center animate-fade-in">
        <div className="text-green-600 dark:text-green-400 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-2">Message Sent!</h3>
        <p className="text-green-700 dark:text-green-400 mb-6">
          Thank you for reaching out. I'll get back to you as soon as possible.
        </p>
        <button 
          onClick={() => setFormState(prev => ({ ...prev, isSubmitted: false }))}
          className="btn btn-primary"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="space-y-6 transition-all duration-300"
    >
      {formState.isError && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6 animate-fade-in">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-800 dark:text-red-200">
                {formState.errorMessage}
              </p>
            </div>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <label 
            htmlFor="name"
            className={`absolute left-4 transition-all duration-300 ${
              focusedField === 'name' || formData.name 
                ? '-top-2.5 text-primary text-xs bg-white dark:bg-bg-dark px-1'
                : 'top-3 text-gray-500'
            }`}
          >
            Name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => handleFocus('name')}
            onBlur={handleBlur}
            className="form-input pt-4"
            required
          />
        </div>
        
        <div className="relative">
          <label 
            htmlFor="email"
            className={`absolute left-4 transition-all duration-300 ${
              focusedField === 'email' || formData.email 
                ? '-top-2.5 text-primary text-xs bg-white dark:bg-bg-dark px-1'
                : 'top-3 text-gray-500'
            }`}
          >
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => handleFocus('email')}
            onBlur={handleBlur}
            className="form-input pt-4"
            required
          />
        </div>
      </div>
      
      <div className="relative">
        <label 
          htmlFor="subject"
          className={`absolute left-4 transition-all duration-300 ${
            focusedField === 'subject' || formData.subject 
              ? '-top-2.5 text-primary text-xs bg-white dark:bg-bg-dark px-1'
              : 'top-3 text-gray-500'
          }`}
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          onFocus={() => handleFocus('subject')}
          onBlur={handleBlur}
          className="form-input pt-4"
        />
      </div>
      
      <div className="relative">
        <label 
          htmlFor="message"
          className={`absolute left-4 transition-all duration-300 ${
            focusedField === 'message' || formData.message 
              ? '-top-2.5 text-primary text-xs bg-white dark:bg-bg-dark px-1'
              : 'top-3 text-gray-500'
          }`}
        >
          Message*
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => handleFocus('message')}
          onBlur={handleBlur}
          rows="5"
          className="form-input pt-4 resize-none"
          required
        ></textarea>
      </div>
      
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={formState.isSubmitting}
          className={`btn btn-primary ${formState.isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {formState.isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;