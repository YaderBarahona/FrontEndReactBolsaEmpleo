import Swal from 'sweetalert2'
import swal from 'sweetalert';
import withReactContent from 'sweetalert2-react-content'

export function showAlert(mensaje, icono, foco=''){
    onFocus(foco);
    const MySwal = withReactContent(Swal);
    MySwal.fire(
        {
            title:mensaje,
            icon:icono
        }
    );

    function onFocus(foco){
        if(foco != ''){
            document.getElementById(foco).focus();
        }
    }

}

export function alertDelete(){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
}
