import PropTypes from 'prop-types'

const CustomInput = ({
  htmlFor,
  text,
  type,
  id,
  placeholder,
  register,
  validation,
  error,
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`${error ? 'block overflow-hidden rounded-md border bg-white border-red-600 px-3 py-2 focus-within:border-red-600 focus-within:ring-1 focus-within:ring-red-700 dark:border-red-600 dark:bg-gray-800' : 'input-style'}`}
    >
      <span className="text-base font-medium text-gray-700 dark:text-gray-200">
        {text}
      </span>
      {type === 'textarea' ? (
        <textarea
          id={id}
          className="mt-1 w-full h-[100px] border-none bg-transparent p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
          {...(register ? register(id, validation) : {})}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          {...(register ? register(id, validation) : {})}
          className="mt-1 w-full border-none bg-transparent p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
        />
      )}
      {error && (
        <span className="text-red-600 dark:text-red-400 text-sm ">
          {error.message}
        </span>
      )}
    </label>
  )
}

CustomInput.propTypes = {
  htmlFor: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  register: PropTypes.func,
  validation: PropTypes.object,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.object,
}

export default CustomInput
