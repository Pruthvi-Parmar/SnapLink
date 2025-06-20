import { AlertCircle } from "lucide-react"

const TextField = ({ label, id, type, errors, register, required, message, className, min, value, placeholder }) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className={`${className ? className : ""} font-medium text-gray-300 text-sm`}>
        {label}
        {required && <span className="text-red-400 ml-0.5">*</span>}
      </label>

      <div className="relative">
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={`
            w-full px-3 py-2.5 border rounded-lg outline-none transition-all duration-200 bg-dark-700/50 backdrop-blur-sm
            ${
              errors[id]?.message
                ? "border-red-400 text-red-300 focus:ring-2 focus:ring-red-400/50"
                : "border-dark-600 text-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30"
            }
            ${className ? className : ""}
          `}
          {...register(id, {
            required: { value: required, message },
            minLength: min ? { value: min, message: `Minimum ${min} characters required` } : null,
            pattern:
              type === "email"
                ? {
                    value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+com+$/,
                    message: "Invalid email format",
                  }
                : type === "url"
                  ? {
                      value:
                        /^(https?:\/\/)?(([a-zA-Z0-9\u00a1-\uffff-]+\.)+[a-zA-Z\u00a1-\uffff]{2,})(:\d{2,5})?(\/[^\s]*)?$/,
                      message: "Please enter a valid URL",
                    }
                  : null,
          })}
        />
      </div>

      {errors[id]?.message && (
        <div className="flex items-center gap-1.5 mt-1">
          <AlertCircle size={14} className="text-red-400" />
          <p className="text-xs font-medium text-red-400">{errors[id]?.message}</p>
        </div>
      )}
    </div>
  )
}

export default TextField
