const form = document.querySelector('form');
    const result = document.getElementById('result');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      try {
        const data = {
          numberQuestions: form.numberQuestions.value,
          topics: form.topics.value,
          numberOptions: form.numberOptions.value,
          difficulty: form.difficulty.value,
          correct: form.correct.value,
          language: form.language.value
        };
  
        const response = await axios.post('http://localhost:8080/generate', data);
        result.innerHTML = response.data;
      } catch (err) {
        console.error(err);
        result.innerHTML = 'An error occurred while generating the quiz. Please try again later.';
      }
    });