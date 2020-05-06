 var x ;
   
     function flight_validate()     
        {
        	x = document.flight.flightresult.value ;

            if(document.flight.flightresult.value.length != 3 )
            {
                alert('Please enter an valid number in this format ###');
                document.flight.flightresult.focus() ; 
                return false;
            }
            else if(document.flight.flightresult.value == "445")
            {
                location.href='pnr_status_result.html';
            }
            else
            {
                alert('Sorry You are not registered ! For Query Go to Customer Care .');
                location.href='contact.html'
            }
            
        }

        function flight_clear()     
        {
            document.flight.flightresult.value = "";
            return false;
        }