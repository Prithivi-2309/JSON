let resume = {
    "Name" 			    : "Prithiviraj K"
    "Education"		    : "B.E Automobile Engineering; PGDM in Supply Chain Management"
    "Date of Birth"		: "23.09.1995"
    "Occupation"		: "Supervisor - Supply Chain Operations and Accounts @ Proactive Supply chain Group"
    }
    
    let resume = {
    "Name" 			    : "Prithiviraj K",
    "Education"		    : "B.E Automobile Engineering; PGDM in Supply Chain Management",
    "Date of Birth"		: "23.09.1995",
    "Occupation"		: "Supervisor - Supply Chain Operations and Accounts @ Proactive Supply chain Group"
    }
    
    for (let data in resume){
        console.log(data, " : " , resume[data])
    }
    
    let resume = [{
        
    "Name" 			    : "Prithiviraj K",
    "Education"		    : "B.E Automobile Engineering; PGDM in Supply Chain Management",
    "Date of Birth"		: "23.09.1995",
    "Occupation"		: "Supervisor - Supply Chain Operations and Accounts @ Proactive Supply chain Group"
    
    }]
    
    for (let data of resume){
        console.log(data)
    }
    
    
    let resume = [{
        
        "Name" 			    : "Prithiviraj K",
        "Education"		    : "B.E Automobile Engineering; PGDM in Supply Chain Management",
        "Date of Birth"		: "23.09.1995",
        "Occupation"		: "Supervisor - Supply Chain Operations and Accounts @ Proactive Supply chain Group"
        
        }]
        
        resume.forEach(n=>{
        console.log(n)    
        })
        