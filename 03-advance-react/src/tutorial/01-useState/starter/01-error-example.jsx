const ErrorExample = () => {
  let count = 0;

  const handleClick = () => {
    count = count + 1;
    console.log(count);
  };

  return (
    <div>
      <button type='button' className='btn' onClick={handleClick}>
        Increment
      </button>
    </div>
  );
};

export default ErrorExample;
