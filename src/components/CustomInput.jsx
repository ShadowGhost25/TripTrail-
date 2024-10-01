import PropTypes from 'prop-types'

const CustomInput = ({
  htmlFor,
  text,
  type,
  id,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block overflow-hidden rounded-md border  bg-white border-gray-200 px-3 py-2 shadow-sm focus-within:border-teal-600 focus-within:ring-1 focus-within:ring-teal-600 dark:border-gray-700 dark:bg-gray-800"
    >
      <span className="text-base font-medium text-gray-700 dark:text-gray-200 ">
        {text}
      </span>
      {type === 'textarea' ? (
        <textarea
          id={id}
          className="mt-1 w-full h-[100px] border-none bg-transparent p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className="mt-1 w-full border-none bg-transparent p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
        />
      )}
    </label>
  )
}

CustomInput.propTypes = {
  htmlFor: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}

export default CustomInput
