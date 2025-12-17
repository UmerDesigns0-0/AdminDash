const Header = ({ category, title }) => {
  return (
    <div>
      <div className="mb-6">
        <p className="text-sm text-slate-500">{category}</p>
        <h1 className="text-3xl font-bold text-slate-700">{title}</h1>
      </div>
    </div>
  );
};

export default Header;
