import FormItem from "./FormItem";
import form from "../../data/form.json";

export default function CategoryForm({ hookTitle, hookDescription, isValid }) {
  const [title, setTitle] = hookTitle;
  const [description, setDescription] = hookDescription;
  return (
    <>
      <FormItem
        settings={form.title.settings}
        hook={[title, setTitle]}
        isValid={isValid.title}
      />
      <FormItem
        settings={form.description.settings}
        hook={[description, setDescription]}
        isValid={isValid.description}
      />
    </>
  );
}
