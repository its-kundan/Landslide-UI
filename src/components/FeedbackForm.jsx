"use client"
// components/FeedbackForm.jsx

export default function FeedbackForm() {
    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = {
        name: event.target.name.value,
        email: event.target.email.value,
        feedback: event.target.feedback.value,
      };
      // Handle the form submission, such as sending data to a backend API
      console.log(formData);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" type="text" required />
  
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
  
        <label htmlFor="feedback">Feedback:</label>
        <textarea id="feedback" name="feedback" required></textarea>
  
        <button type="submit">Submit Feedback</button>
      </form>
    );
  }
  