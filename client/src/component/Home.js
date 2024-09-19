import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  
  const generateRoomId = (e) => {
    e.preventDefault();
    const id = uuid();
    setRoomId(id);
    toast.success("Room Id is generated");
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("Both the fields are required");
      return;
      
    }
    navigate(`/editor/${roomId}`, {
      state: { username },
    });
  }

    return (
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-12 col-md-6">
            <div className="card shadow-sm p-2 mb-5 bg-secondary rounded">
              <div className="card-body text-center bg-dark">
                <img
                  className="img-fluid mx-auto d-block"
                  src="/image/codeIt.png"
                  alt="CodeIt"
                  style={{ maxWidth: "150px" }}
                />
                            <h4 className='text-light'>Enter Your Room Id</h4>
                <div className="form-group">
                  <input
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    type="text"
                    className="form-control mb-2"
                    placeholder="Room Id"
                                />
                                </div>
                                <div className="form-group">
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    className="form-control mb-2"
                    placeholder="UserName"
                  />
                 
                            </div>
                            <button onClick={joinRoom} className='btn btn-success btn-lg btn-block'>JOIN NOW</button>
                            <p className='mt-3 text-light'>Don't have a Room Id? {" "}
                  <span className='text-success p-2'
                    style={{ cursor: 'pointer' }}
                    onClick={generateRoomId}
                  >
                                    New Room</span>
                            </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}


export default Home;