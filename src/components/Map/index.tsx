interface BranchMap{
    map:string
}

const BranchMap = ({map}:BranchMap) => {

    return (


        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1193.1338651403928!2d69.24771519852969!3d41.22170404699893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2s!4v1678114393083!5m2!1sru!2s"
            width="600" height="450" style={{border:"0"}}  loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
    )
}


export default BranchMap;