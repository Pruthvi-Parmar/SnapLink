import CreateNewShorten from "./CreateNewShorten"

const ShortenPopUp = ({ open, setOpen, refetch }) => {
  if (!open) return null

  return <CreateNewShorten setOpen={setOpen} refetch={refetch} />
}

export default ShortenPopUp
