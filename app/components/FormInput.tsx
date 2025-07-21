const FormInput = ({ label, placeholder, value, onChange, name, type = 'text' }: { label: string, placeholder: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, name: string, type?: string }) => (
    <div>
      <label htmlFor={name} className="block text-sm font-bold text-gray-700 mb-1.5">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition"
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition"
        />
      )}
    </div>
  );

export default FormInput;