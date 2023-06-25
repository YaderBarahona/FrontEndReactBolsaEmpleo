import { useQuery } from "react-query";
import { getOffers } from "../../services/OfferService";
import InputModal from "../applicantView/components/InputModal";

const OfferList = () => {
  const { data, isLoading, isError } = useQuery("offers", getOffers, {
    staleTime: 5000,
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error</div>;

  return (
    <div  className="container py-3">
        <br />
        <br />
        <h1>Offer List</h1>
        <br />
        <br />
       
      {data.map((offer) => (
        <div className="card">
        <div className="row">
          <div className="col-sm-5">
          <img class="d-block w-100 btnO" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt=""/>
          {/* <img src={Logo} alt="logo" /> */}
          </div>
          <div className="col-sm-6">
            <div className="card-block">
            <h4 className="card-title">{offer.offerTittle}</h4> 
              <p>{offer.company}</p>
              <p>{offer.offerDescription}</p>
              <br />
              {/* <a className="btn btn-primary btn-sm float-right">Apply Offer</a> */}
              <InputModal param={offer.idOffer}></InputModal>

            </div>
          </div>
        </div>
      </div>
      

      ))}
      
    </div>
  );
};

export default OfferList;
