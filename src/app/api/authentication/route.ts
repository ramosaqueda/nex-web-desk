import { NextResponse } from "next/server";
import { authenticate } from 'ldap-authentication';


export async function POST(request: Request) {
	const body = await request.json();
	const { email,  password } = body;
	const user = await authenticate(
    {
        ldapOpts: {url: 'ldap://172.18.1.7:389'},
         userDn: `uid=${email},dc=minpublico,dc=cl`,
         userPassword: password
    }
    );
    if (user) {
      return NextResponse.json({ message: 'Autenticación exitosa' })
    }  
    else {
      return NextResponse.json({ message: 'Autenticación fallida' })
    }
	
}
 /*
 LDaunthenticator: React.FC<authProps>  =  ({username,password}>) => {
  return  res.status(200).json({ message: 'Autenticación exitosa' })
  try {
    const user = await authenticate(
        {
            ldapOpts: {url: 'ldap://ldap.forumsys.com:389'},
             userDn: `uid=${username},dc=example,dc=com`,
             userPassword: password,
             userSearchBase: 'dc=example,dc=com',
             usernameAttribute: 'uid'   
        },        
        
        )

    if (user) {
      // Autenticación exitosa
      res.status(200).json({ message: 'Autenticación exitosa' })
    } else {
      // Autenticación fallida
      res.status(401).json({ message: 'Autenticación fallida' })
    }
  } catch (error) {
    // Error de autenticación
    res.status(500).json({ message: 'Error de autenticación' })
  }

}
   */