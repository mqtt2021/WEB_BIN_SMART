import React,{useState} from 'react'
import './statistics.scss'
import Form from 'react-bootstrap/Form';
import ReactDatePicker from 'react-datepicker';
function Statistics() {
  const [selectedDateFrom, setselectedDateFrom] = useState(null);
  const [selectedDateTo, setselectedDateTo] = useState(null);
  const [selectedDateOnly, setselectedDateOnly] = useState(null);
  return (
    <div>

          <div className='statistic-select-district'>
                <Form.Select className='form-select' aria-label="Default select example" >
                   <option>All</option>
                   <option value="1">District 1</option>
                   <option value="2">District 2</option>
                   <option value="3">District 3</option>
                   <option value="4">District 4</option>
                   <option value="5">District 5</option>
                   <option value="6">District 6</option>
                   <option value="7">District 7</option>
                   <option value="8">District 8</option>
                   <option value="8">District 9</option>
                   <option value="8">District 10</option>
                </Form.Select>
          </div>
          <div className='father-statistics'>
              <div className='row'>
                  <div className='chart-layout col-10'>

                          <div className='chart-layout-item' style={{'--percent': '90%'}}>
                                <h5>
                                  90
                                </h5>
                                <h5>
                                  Nguyễn Thị Minh Khai
                                </h5>
                          </div>
                          <div className='chart-layout-item' style={{'--percent': '40%'}}>
                                <h5>
                                  40
                                </h5>
                                <h5>
                                  Bùi Thị Xuân
                                </h5>
                          </div>
                          <div className='chart-layout-item' style={{'--percent': '70%'}}>
                                <h5>
                                  70
                                </h5>
                                <h5>
                                  Cống Quỳnh
                                </h5>
                          </div>
                          <div className='chart-layout-item' style={{'--percent': '60%'}}>
                                <h5>
                                  60
                                </h5>
                                <h5>
                                  Trần Hưng Đạo
                                </h5>
                          </div>
                          <div className='chart-layout-item' style={{'--percent': '60%'}}>
                                <h5>
                                  60
                                </h5>
                                <h5>
                                  Võ Văn Kiệt
                                </h5>
                          </div>
                          <div className='chart-layout-item' style={{'--percent': '50%'}}>
                                <h5>
                                  50
                                </h5>
                                <h5>
                                  Trần Phú
                                </h5>
                          </div>

                  </div>
                  <div className='button col-2'>
                  <div>
                    <div>
                            <h2>Only : </h2>
                            <ReactDatePicker
                              selected={selectedDateOnly}
                              onChange={date => setselectedDateOnly(date)}
                              dateFormat="dd/MM/yyyy" // Định dạng ngày tháng (tùy chọn)
                            />
                    </div>
        </div>
        <div className='selectdate'>
                    <div>
                            <h2>From : </h2>
                            <ReactDatePicker
                              selected={selectedDateFrom}
                              onChange={date => setselectedDateFrom(date)}
                              dateFormat="dd/MM/yyyy" // Định dạng ngày tháng (tùy chọn)
                            />
                    </div>
                    <div>
                            <h2>To : </h2>
                            <ReactDatePicker
                              selected={selectedDateTo}
                              onChange={date => setselectedDateTo(date)}
                              dateFormat="dd/MM/yyyy" // Định dạng ngày tháng (tùy chọn)
                            />
                    </div>
                   
        </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Statistics
