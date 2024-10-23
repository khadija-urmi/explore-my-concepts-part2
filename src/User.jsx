export default function User({ user }) {
    const { name, email } = user;
    return (
        <div>
            <h3>Uuser: {name}</h3>
            <p>email :{email}</p>
        </div>
    )
}