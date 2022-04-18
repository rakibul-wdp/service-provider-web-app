import React from 'react';
import { Table } from 'react-bootstrap';
import './Blogs.css';

const Blogs = () => {
  return (
    <div className='container mt-5  blogs-container'>
      <div>
        <h2>1. What is the difference between Authorization and Authentication...?</h2>
        <Table striped bordered hover>
          <thead>
            <tr className='table-heading'>
              <th className='text-center'>First Name</th>
              <th className='text-center'>Last Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                By authentication process verify or identify who you are. Thats why this is the first step in any
                security process. It used by server because server needs to know who is accessing their information.
              </td>
              <td>
                Authorization not only know who your are but also give some extra capability or power to do extra
                things. It also determines what resources a user can access.
              </td>
            </tr>
            <tr>
              <td>In this process users or persons are verified by passwords, biometrics, one-time pins, or apps.</td>
              <td>
                While authorization process users or persons are validated by settings maintained by security teams
              </td>
            </tr>
            <tr>
              <td>
                Authentication is the first step of a good identity and access management process. Like when we visit a
                website at first they take our identity by sign up or register
              </td>
              <td>
                Authorization always takes place after authentication. In facebook some people are admin or moderator
                and they have some extra power or that doesn't have normal user.
              </td>
            </tr>
            <tr>
              <td>
                Example: You are going to oen place to another place by journey by train. You just take sit and travel.
                You can't do any kind of extra things.
              </td>
              <td>
                Example: On the other hand train services holder not only travel but also check passenger ticket and
                their able to do any kind of action.
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <h2>2. Why are you using firebase...? What other options do you have to implement authentication...?</h2>
        <p>
          Mainly I use firebase for authentication. Like users sign up and sign in a website, and their email, name and
          password stored firebase. But firebase not only provide authentication but also provide database, cloud
          storage, remote config etc.
        </p>
        <ul>
          <h5># Alternative firebase</h5>
          <li>Parse</li>
          <li>Back4App</li>
          <li>AWS Amplify</li>
          <li>Kuzzle</li>
          <li>Couchbase</li>
          <li>NativeScript</li>
          <li>RxDB</li>
          <li>Flutter</li>
        </ul>
      </div>
      <div>
        <h2>3. What other services does firebase provide other than authentication...?</h2>
        <p>Firebase is not only provide authentication services, but also provide some important services. There are...</p>
        <ul>
          <li>Cloud Functions</li>
          <li>Hosting</li>
          <li>Cloud Firestore</li>
          <li>Cloud Storage</li>
          <li>Predictions</li>
          <li>Cloud Messaging</li>
          <li>Dynamic Links</li>
          <li>Remote Config</li>
          <li>Google Analytics</li>
          <li>Realtime Database</li>
        </ul>
      </div>
    </div>
  );
};

export default Blogs;