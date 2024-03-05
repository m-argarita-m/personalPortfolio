import React, { useState } from 'react';

interface TVMoviesFormState {
  name: string;
  rating: number | '';
  comments: string;
}

const AddMovieTVShowForm: React.FC = () => {
  const [formState, setFormState] = useState<TVMoviesFormState>({ name: '', rating: '', comments: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: name === 'rating' ? parseInt(value) || '' : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle form submission here
    console.log(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">TV Show/Movie Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={formState.rating}
          min="0"
          max="100"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="comments">Comments:</label>
        <textarea
          id="comments"
          name="comments"
          value={formState.comments}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddMovieTVShowForm;
