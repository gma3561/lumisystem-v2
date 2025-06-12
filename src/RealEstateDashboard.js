import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Bell, Users, Home, MessageSquare, TrendingUp, AlertTriangle, CheckCircle, Clock, Target, DollarSign, Search, Download, Eye, Edit, Filter } from 'lucide-react';

const RealEstateDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // 샘플 데이터
  const todayStats = {
    newInquiries: { value: 18, change: 20 },
    activeConsultations: { value: 12, change: 15 },
    scheduledViewings: { value: 5, change: -10 },
    pendingContracts: { value: 3, change: 50 }
  };

  const funnelData = [
    { stage: '문의접수', count: 100, percentage: 100, target: 100 },
    { stage: '1차상담', count: 80, percentage: 80, target: 85 },
    { stage: '매물추천', count: 60, percentage: 60, target: 70 },
    { stage: '임장신청', count: 25, percentage: 25, target: 30 },
    { stage: '계약체결', count: 12, percentage: 12, target: 15 }
  ];

  const employeePerformance = [
    { name: '박소현', inquiries: 45, consultations: 38, contracts: 6, rate: 13.3, status: 'warning' },
    { name: '김효석', inquiries: 32, consultations: 28, contracts: 5, rate: 15.6, status: 'good' },
    { name: '이직원', inquiries: 28, consultations: 22, contracts: 3, rate: 10.7, status: 'danger' }
  ];

  const propertyData = [
    { name: '반포래미안', views: 32, interest: 85 },
    { name: '잠원한강', views: 28, interest: 72 },
    { name: '압구정현대', views: 24, interest: 68 },
    { name: '청담삼성', views: 19, interest: 61 },
    { name: '도곡타워팰리스', views: 15, interest: 55 }
  ];

  // 시간별 문의 데이터를 채널별 문의 데이터로 변경
  const channelInquiries = [
    { channel: '채널톡', count: 45, color: '#3B82F6' },
    { channel: '네이버톡톡', count: 38, color: '#10B981' },
    { channel: '카카오톡', count: 25, color: '#F59E0B' },
    { channel: '전화문의', count: 12, color: '#8B5CF6' },
    { channel: '직접방문', count: 8, color: '#EF4444' }
  ];

  // 매물 데이터
  const propertyListings = [
    {
      id: 1,
      name: '한남동 센트럴파크',
      address: '서울시 용산구 한남동 10층 102호',
      type: '아파트',
      area: '84.67㎡',
      floor: '3층',
      price: '12억',
      registrationDate: '2024.12.20',
      status: '매매',
      manager: '박소현',
      views: 45
    },
    {
      id: 2,
      name: '논현동 래미안',
      address: '서울시 강남구 논현동 15층 301호',
      type: '아파트',
      area: '104.91㎡',
      floor: '4층',
      price: '18억',
      registrationDate: '2024.12.15',
      status: '매매',
      manager: '김효석',
      views: 32
    },
    {
      id: 3,
      name: '청담동 아이파크',
      address: '서울시 강남구 청담동 20층 401호',
      type: '아파트',
      area: '134.41㎡',
      floor: '4층',
      price: '25억',
      registrationDate: '2024.12.10',
      status: '매매',
      manager: '이직원',
      views: 67
    },
    {
      id: 4,
      name: '역삼동 타워팰리스',
      address: '서울시 강남구 역삼동 12층 205호',
      type: '오피스텔',
      area: '45.76㎡',
      floor: '1층',
      price: '6억',
      registrationDate: '2024.12.08',
      status: '전세',
      manager: '박소현',
      views: 28
    },
    {
      id: 5,
      name: '반포동 래미안퍼스티지',
      address: '서울시 서초구 반포동 25층 1501호',
      type: '아파트',
      area: '159.32㎡',
      floor: '15층',
      price: '35억',
      registrationDate: '2024.12.05',
      status: '매매',
      manager: '김효석',
      views: 89
    },
    {
      id: 6,
      name: '잠원동 한강맨션',
      address: '서울시 서초구 잠원동 8층 801호',
      type: '아파트',
      area: '98.50㎡',
      floor: '8층',
      price: '22억',
      registrationDate: '2024.12.03',
      status: '매매',
      manager: '이직원',
      views: 41
    },
    {
      id: 7,
      name: '압구정동 현대아파트',
      address: '서울시 강남구 압구정동 5층 502호',
      type: '아파트',
      area: '112.45㎡',
      floor: '5층',
      price: '28억',
      registrationDate: '2024.12.01',
      status: '매매',
      manager: '박소현',
      views: 56
    },
    {
      id: 8,
      name: '도곡동 타워팰리스',
      address: '서울시 강남구 도곡동 30층 3001호',
      type: '아파트',
      area: '201.85㎡',
      floor: '30층',
      price: '55억',
      registrationDate: '2024.11.28',
      status: '매매',
      manager: '김효석',
      views: 123
    }
  ];

  // 매니저 목록
  const managers = ['전체', '박소현', '김효석', '이직원'];

  // 유입 채널별 데이터
  const channelData = [
    { channel: '채널톡', count: 45, percentage: 35, color: '#3B82F6' },
    { channel: '네이버톡톡', count: 38, percentage: 30, color: '#10B981' },
    { channel: '카카오톡', count: 25, percentage: 20, color: '#F59E0B' },
    { channel: '전화문의', count: 12, percentage: 9, color: '#8B5CF6' },
    { channel: '직접방문', count: 8, percentage: 6, color: '#EF4444' }
  ];

  // 직원별 상세 성과 데이터
  const employeeDetailedPerformance = [
    {
      id: 1,
      name: '박소현',
      photo: '👤',
      totalInquiries: 128,
      responseTime: '1.8분',
      satisfactionScore: 4.3,
      monthlyTarget: 100,
      achievement: 128,
      channels: {
        '채널톡': 45,
        '네이버톡톡': 35,
        '카카오톡': 25,
        '전화문의': 15,
        '직접방문': 8
      },
      funnel: {
        '문의접수': 128,
        '1차상담': 108,
        '매물추천': 85,
        '임장신청': 38,
        '계약체결': 18,
        '최종성약': 16
      },
      weeklyData: [
        { week: '1주차', inquiries: 28, contracts: 3 },
        { week: '2주차', inquiries: 32, contracts: 4 },
        { week: '3주차', inquiries: 35, contracts: 5 },
        { week: '4주차', inquiries: 33, contracts: 4 }
      ],
      recentActivities: [
        { date: '2024.12.20', time: '14:30', activity: '신규 문의 응답', customer: '홍길동', status: '완료' },
        { date: '2024.12.20', time: '13:15', activity: '임장 안내', customer: '김영희', status: '진행중' },
        { date: '2024.12.20', time: '11:20', activity: '계약 체결', customer: '이철수', status: '완료' },
        { date: '2024.12.19', time: '16:45', activity: '매물 추천', customer: '박민수', status: '완료' }
      ]
    },
    {
      id: 2,
      name: '김효석',
      photo: '👤',
      totalInquiries: 95,
      responseTime: '2.1분',
      satisfactionScore: 4.1,
      monthlyTarget: 100,
      achievement: 95,
      channels: {
        '채널톡': 32,
        '네이버톡톡': 28,
        '카카오톡': 18,
        '전화문의': 12,
        '직접방문': 5
      },
      funnel: {
        '문의접수': 95,
        '1차상담': 82,
        '매물추천': 68,
        '임장신청': 28,
        '계약체결': 15,
        '최종성약': 14
      },
      weeklyData: [
        { week: '1주차', inquiries: 22, contracts: 3 },
        { week: '2주차', inquiries: 25, contracts: 4 },
        { week: '3주차', inquiries: 24, contracts: 4 },
        { week: '4주차', inquiries: 24, contracts: 3 }
      ],
      recentActivities: [
        { date: '2024.12.20', time: '15:20', activity: '신규 문의 응답', customer: '정수진', status: '완료' },
        { date: '2024.12.20', time: '12:30', activity: '매물 추천', customer: '최민호', status: '완료' },
        { date: '2024.12.19', time: '17:10', activity: '임장 예약', customer: '서영희', status: '예약완료' },
        { date: '2024.12.19', time: '14:25', activity: '상담 진행', customer: '윤성호', status: '진행중' }
      ]
    },
    {
      id: 3,
      name: '이직원',
      photo: '👤',
      totalInquiries: 78,
      responseTime: '2.8분',
      satisfactionScore: 3.9,
      monthlyTarget: 100,
      achievement: 78,
      channels: {
        '채널톡': 25,
        '네이버톡톡': 22,
        '카카오톡': 15,
        '전화문의': 10,
        '직접방문': 6
      },
      funnel: {
        '문의접수': 78,
        '1차상담': 62,
        '매물추천': 45,
        '임장신청': 18,
        '계약체결': 8,
        '최종성약': 7
      },
      weeklyData: [
        { week: '1주차', inquiries: 18, contracts: 2 },
        { week: '2주차', inquiries: 20, contracts: 2 },
        { week: '3주차', inquiries: 22, contracts: 2 },
        { week: '4주차', inquiries: 18, contracts: 1 }
      ],
      recentActivities: [
        { date: '2024.12.20', time: '16:15', activity: '신규 문의 응답', customer: '강민정', status: '완료' },
        { date: '2024.12.20', time: '10:45', activity: '매물 상담', customer: '조현우', status: '진행중' },
        { date: '2024.12.19', time: '15:30', activity: '임장 동행', customer: '한지영', status: '완료' },
        { date: '2024.12.19', time: '11:15', activity: '계약 상담', customer: '송민석', status: '보류' }
      ]
    }
  ];

  const priceDistribution = [
    { name: '10억 이하', value: 45, color: '#8884d8' },
    { name: '10-20억', value: 38, color: '#82ca9d' },
    { name: '20-30억', value: 25, color: '#ffc658' },
    { name: '30억 이상', value: 17, color: '#ff7300' }
  ];

  const notifications = [
    { id: 1, type: 'urgent', message: 'VIP 고객 홍길동님 문의 접수', time: '방금 전' },
    { id: 2, type: 'info', message: '신규 매물 18건 크롤링 완료', time: '5분 전' },
    { id: 3, type: 'warning', message: '김영희 고객 이탈 위험 감지', time: '10분 전' },
    { id: 4, type: 'success', message: '김효석 직원 목표 120% 달성', time: '30분 전' }
  ];

  const StatCard = ({ title, value, change, icon: Icon, color }) => (
    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4" style={{ borderLeftColor: color }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-gray-600">{title}</p>
          <p className="text-xl font-bold text-gray-900">{value}건</p>
          <p className={`text-xs ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {change >= 0 ? '↑' : '↓'} {Math.abs(change)}%
          </p>
        </div>
        <Icon className="h-6 w-6" style={{ color }} />
      </div>
    </div>
  );

  const FunnelChart = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">📊 고객 전환 퍼널</h3>
      <div className="space-y-4">
        {funnelData.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="w-20 text-sm font-medium">{item.stage}</div>
            <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
              <div 
                className="bg-blue-500 h-6 rounded-full flex items-center justify-center text-white text-xs font-medium"
                style={{ width: `${item.percentage}%` }}
              >
                {item.count}명
              </div>
            </div>
            <div className="w-16 text-sm">
              <span className={item.percentage >= item.target ? 'text-green-600' : 'text-red-600'}>
                {item.percentage}%
              </span>
            </div>
            <div className="w-16 text-xs text-gray-500">
              목표: {item.target}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const EmployeeTable = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">👥 팀 성과 현황</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">직원명</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">응답수</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">상담수</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">계약수</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">성약률</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">상태</th>
            </tr>
          </thead>
          <tbody>
            {employeePerformance.map((employee, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2 font-medium">👤 {employee.name}</td>
                <td className="px-4 py-2">{employee.inquiries}건</td>
                <td className="px-4 py-2">{employee.consultations}건</td>
                <td className="px-4 py-2">{employee.contracts}건</td>
                <td className="px-4 py-2">{employee.rate}%</td>
                <td className="px-4 py-2">
                  {employee.status === 'good' && <span className="text-green-600">🟢</span>}
                  {employee.status === 'warning' && <span className="text-yellow-600">🟡</span>}
                  {employee.status === 'danger' && <span className="text-red-600">🔴</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const PropertyTop5 = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">🏠 인기 매물 TOP 5</h3>
      <div className="space-y-3">
        {propertyData.map((property, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <div className="flex items-center space-x-3">
              <span className="font-bold text-lg text-blue-600">#{index + 1}</span>
              <span className="font-medium">{property.name}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">{property.views}회</span>
              <span className="text-sm font-medium text-blue-600">{property.interest}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const NotificationPanel = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">🔔 실시간 알림</h3>
        <Bell className="h-5 w-5 text-gray-400" />
      </div>
      <div className="space-y-3">
        {notifications.map((notification) => (
          <div 
            key={notification.id} 
            className={`p-3 rounded-lg border-l-4 ${
              notification.type === 'urgent' ? 'bg-red-50 border-red-400' :
              notification.type === 'warning' ? 'bg-yellow-50 border-yellow-400' :
              notification.type === 'success' ? 'bg-green-50 border-green-400' :
              'bg-blue-50 border-blue-400'
            }`}
          >
            <p className="text-sm font-medium">{notification.message}</p>
            <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const EmployeePerformance = () => {
    const [selectedEmployee, setSelectedEmployee] = useState(employeeDetailedPerformance[0]);
    const [timeFilter, setTimeFilter] = useState('daily');

    const handleEmployeeSelect = (employee) => {
      setSelectedEmployee(employee);
    };

    return (
      <div className="space-y-6">
        {/* 시간 필터 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <span className="font-medium text-gray-700">조회 기간:</span>
            <div className="flex space-x-2">
              <button
                onClick={() => setTimeFilter('daily')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  timeFilter === 'daily'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                일간
              </button>
              <button
                onClick={() => setTimeFilter('weekly')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  timeFilter === 'weekly'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                주간
              </button>
            </div>
          </div>
        </div>
              {/* 직원 선택 탭 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex space-x-4 mb-6">
            {employeeDetailedPerformance.map((employee) => (
              <button
                key={employee.id}
                onClick={() => handleEmployeeSelect(employee)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  selectedEmployee.id === employee.id
                    ? 'bg-blue-100 text-blue-700 border-2 border-blue-300'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-2xl">{employee.photo}</span>
                <span className="font-medium">{employee.name}</span>
              </button>
            ))}
          </div>

          {/* 선택된 직원의 상세 정보 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-600 mb-2">총 문의 수</h4>
              <p className="text-2xl font-bold text-blue-600">{selectedEmployee.totalInquiries}</p>
              <p className="text-xs text-gray-500">목표: {selectedEmployee.monthlyTarget}</p>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-600 mb-2">평균 응답 시간</h4>
              <p className="text-2xl font-bold text-green-600">{selectedEmployee.responseTime}</p>
              <p className="text-xs text-gray-500">목표: 3분 이내</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-600 mb-2">고객 만족도</h4>
              <p className="text-2xl font-bold text-purple-600">{selectedEmployee.satisfactionScore}/5.0</p>
              <p className="text-xs text-gray-500">목표: 4.0 이상</p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-600 mb-2">목표 달성률</h4>
              <p className="text-2xl font-bold text-orange-600">{Math.round((selectedEmployee.achievement / selectedEmployee.monthlyTarget) * 100)}%</p>
              <p className="text-xs text-gray-500">{selectedEmployee.achievement}/{selectedEmployee.monthlyTarget}</p>
            </div>
          </div>

          {/* 차트 영역 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 주간 성과 차트 */}
            <div className="bg-white p-4 border rounded-lg">
              <h4 className="font-medium mb-4">📈 주간 성과 추이</h4>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={selectedEmployee.weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="inquiries" fill="#3B82F6" name="문의수" />
                  <Bar dataKey="contracts" fill="#10B981" name="계약수" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* 퍼널 차트 */}
            <div className="bg-white p-4 border rounded-lg">
              <h4 className="font-medium mb-4">🎯 개인 전환 퍼널</h4>
              <div className="space-y-2">
                {Object.entries(selectedEmployee.funnel).map(([stage, count], index) => {
                  const percentage = (count / selectedEmployee.totalInquiries) * 100;
                  return (
                    <div key={stage} className="flex items-center space-x-3">
                      <div className="w-16 text-xs font-medium">{stage}</div>
                      <div className="flex-1 bg-gray-200 rounded-full h-4">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-4 rounded-full flex items-center justify-end pr-2"
                          style={{ width: `${percentage}%` }}
                        >
                          <span className="text-white text-xs font-medium">{count}</span>
                        </div>
                      </div>
                      <div className="w-12 text-xs text-gray-600">{Math.round(percentage)}%</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 최근 활동 */}
          <div className="mt-6 bg-white p-4 border rounded-lg">
            <h4 className="font-medium mb-4">📋 최근 활동 내역</h4>
            <div className="space-y-3">
              {selectedEmployee.recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div className="flex items-center space-x-4">
                    <div className="text-sm">
                      <span className="font-medium">{activity.date}</span>
                      <span className="text-gray-500 ml-2">{activity.time}</span>
                    </div>
                    <div className="text-sm font-medium">{activity.activity}</div>
                    <div className="text-sm text-gray-600">{activity.customer}</div>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    activity.status === '완료' ? 'bg-green-100 text-green-800' :
                    activity.status === '진행중' ? 'bg-blue-100 text-blue-800' :
                    activity.status === '예약완료' ? 'bg-purple-100 text-purple-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {activity.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const PropertyManagement = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedManager, setSelectedManager] = useState('전체');
    const [selectedType, setSelectedType] = useState('전체 유형');
    
    const filteredProperties = propertyListings.filter(property => {
      const matchesSearch = property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          property.address.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesManager = selectedManager === '전체' || property.manager === selectedManager;
      const matchesType = selectedType === '전체 유형' || property.type === selectedType;
      
      return matchesSearch && matchesManager && matchesType;
    });

    const totalProperties = propertyListings.length;
    const myProperties = propertyListings.filter(p => p.manager === '박소현').length;
    const interestProperties = propertyListings.filter(p => p.views > 50).length;
    const contractProperties = propertyListings.filter(p => p.status === '매매' && p.views > 80).length;

    return (
      <div className="space-y-6">
        {/* 상단 통계 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">전체 매물</p>
                <p className="text-2xl font-bold text-blue-600">{totalProperties}</p>
              </div>
              <Home className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">MY 매물</p>
                <p className="text-2xl font-bold text-green-600">{myProperties}</p>
              </div>
              <Users className="h-8 w-8 text-green-500" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">관심 매물</p>
                <p className="text-2xl font-bold text-orange-600">{interestProperties}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-500" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">상담 완료</p>
                <p className="text-2xl font-bold text-purple-600">{contractProperties}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-purple-500" />
            </div>
          </div>
        </div>

        {/* 검색 및 필터 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-4 mb-4">
            <Search className="h-5 w-5 text-gray-400" />
            <span className="font-medium text-gray-700">매물 검색</span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="매물명 또는 주소를 입력하세요"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={selectedManager}
              onChange={(e) => setSelectedManager(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              {managers.map(manager => (
                <option key={manager} value={manager}>{manager}</option>
              ))}
            </select>
            
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="전체 유형">전체 유형</option>
              <option value="아파트">아파트</option>
              <option value="오피스텔">오피스텔</option>
            </select>
            
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              검색
            </button>
          </div>
        </div>

        {/* 매물 목록 */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">매물 목록</h3>
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-1 px-3 py-1 text-sm text-gray-600 hover:text-gray-800">
                  <Download className="h-4 w-4" />
                  <span>엑셀 다운로드</span>
                </button>
                <button className="flex items-center space-x-1 px-3 py-1 text-sm text-gray-600 hover:text-gray-800">
                  <Eye className="h-4 w-4" />
                  <span>미리보기</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    선택
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    매물정보
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    면적/구조
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    가격
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    등록일
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    상태
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    조회수
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    담당자
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    관리
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredProperties.map((property) => (
                  <tr key={property.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input type="checkbox" className="rounded" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
                        <Home className="h-5 w-5 text-blue-600" />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{property.name}</div>
                        <div className="text-sm text-gray-500">{property.address}</div>
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                          {property.type}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{property.area}</div>
                      <div className="text-sm text-gray-500">{property.floor}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{property.price}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{property.registrationDate}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        property.status === '매매' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {property.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">조회 {property.views}회</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{property.manager}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-800">
                        <Edit className="h-4 w-4" />
                        <span className="text-sm">수정</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const TabNavigation = () => (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex space-x-8">
          {[
            { id: 'overview', name: '대시보드', icon: TrendingUp },
            { id: 'funnel', name: '퍼널 분석', icon: Target },
            { id: 'employee-performance', name: '직원 성과', icon: Users },
            { id: 'properties', name: '매물 관리', icon: Home },
            { id: 'automation', name: '자동화 제안서', icon: MessageSquare }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-4 border-b-2 text-sm font-medium ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.name}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">🏢 더부동산 통합 관리 기획 및 자동화 제안서</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                📅 {currentTime.toLocaleDateString('ko-KR')} {currentTime.toLocaleTimeString('ko-KR')}
              </span>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">👤 관리자</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <TabNavigation />

      <main className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* 시간 필터 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <span className="font-medium text-gray-700">조회 기간:</span>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => {}} 
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium"
                  >
                    일간
                  </button>
                  <button 
                    onClick={() => {}} 
                    className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg text-sm font-medium"
                  >
                    주간
                  </button>
                </div>
              </div>
            </div>

            {/* Today's Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                title="📞 신규문의"
                value={todayStats.newInquiries.value}
                change={todayStats.newInquiries.change}
                icon={MessageSquare}
                color="#3B82F6"
              />
              <StatCard
                title="💬 진행상담"
                value={todayStats.activeConsultations.value}
                change={todayStats.activeConsultations.change}
                icon={Users}
                color="#10B981"
              />
              <StatCard
                title="🏠 임장예정"
                value={todayStats.scheduledViewings.value}
                change={todayStats.scheduledViewings.change}
                icon={Home}
                color="#F59E0B"
              />
              <StatCard
                title="📝 계약대기"
                value={todayStats.pendingContracts.value}
                change={todayStats.pendingContracts.change}
                icon={CheckCircle}
                color="#8B5CF6"
              />
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">📊 채널별 문의량</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={channelInquiries}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="channel" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">💰 가격대별 매물 분포</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={priceDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}건`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {priceDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <EmployeeTable />
              </div>
              <div>
                <NotificationPanel />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'funnel' && (
          <div className="space-y-6">
            <FunnelChart />
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">📊 월간 퍼널 분석</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">문제점 및 개선방안</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <span className="text-red-500">🔴</span>
                      <span>1차 상담 전환율 1% 부족 → 응답시간 단축 필요</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-yellow-500">🟡</span>
                      <span>계약 체결률 4% 부족 → 협상력 강화 교육</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">🟢</span>
                      <span>매물 추천, 임장 신청 목표 초과 달성</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">주요 성과 지표</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>전체 성약률:</span>
                      <span className="font-medium">12%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>목표 달성률:</span>
                      <span className="font-medium text-yellow-600">80%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>이번 달 계약:</span>
                      <span className="font-medium">54건</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'employee-performance' && (
          <EmployeePerformance />
        )}

        {activeTab === 'properties' && (
          <PropertyManagement />
        )}

        {activeTab === 'automation' && (
          <div className="space-y-6">
            {/* 자동화 제안서 헤더 */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-2">🚀 부동산 업무 자동화 제안서</h2>
              <p className="text-blue-100">효율성 극대화를 위한 통합 자동화 솔루션</p>
            </div>

            {/* 채널톡 성과 추적 */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <MessageSquare className="h-6 w-6 text-blue-500 mr-2" />
                📊 채널톡 성과 추적
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="border p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-blue-700">고객 분석 지표</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="h-5 w-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</div>
                      <div>
                        <p className="font-medium">방문자 분석</p>
                        <p className="text-sm text-gray-600">유입 경로별 방문자 수, 평균 체류 시간, 재방문율</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="h-5 w-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</div>
                      <div>
                        <p className="font-medium">채팅 전환율</p>
                        <p className="text-sm text-gray-600">방문자 중 채팅 시작 비율, 채팅 완료 후 상담 전환율</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="h-5 w-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</div>
                      <div>
                        <p className="font-medium">인기 매물 분석</p>
                        <p className="text-sm text-gray-600">문의 빈도가 높은 매물 자동 추출 및 인기 요인 분석</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="border p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-green-700">응대 효율성 지표</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="h-5 w-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</div>
                      <div>
                        <p className="font-medium">첫 응답 시간</p>
                        <p className="text-sm text-gray-600">고객 문의 후 첫 응답까지 평균 소요 시간 (목표: 30초 이내)</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="h-5 w-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</div>
                      <div>
                        <p className="font-medium">상담 완료율</p>
                        <p className="text-sm text-gray-600">시작된 상담 중 성공적으로 완료된 비율 (목표: 85% 이상)</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="h-5 w-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</div>
                      <div>
                        <p className="font-medium">상담원별 만족도</p>
                        <p className="text-sm text-gray-600">채팅 종료 후 고객 평가 기반 상담원 만족도 점수</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-lg mb-3 text-blue-700">자동화 솔루션</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border border-blue-200 p-3 rounded-lg bg-white">
                    <div className="font-medium text-blue-700 mb-2">첫 응답 자동화</div>
                    <p className="text-sm text-gray-600">첫 문의 5초 내 자동 응답, 직원 연결 및 상담 예약 옵션 제공</p>
                  </div>
                  <div className="border border-blue-200 p-3 rounded-lg bg-white">
                    <div className="font-medium text-blue-700 mb-2">매물 정보 자동 제공</div>
                    <p className="text-sm text-gray-600">키워드 인식 기반 관련 매물 정보 및 사진 자동 전송</p>
                  </div>
                  <div className="border border-blue-200 p-3 rounded-lg bg-white">
                    <div className="font-medium text-blue-700 mb-2">상담 연속성 확보</div>
                    <p className="text-sm text-gray-600">고객 이력 및 상담 내용 자동 기록으로 상담원 변경 시에도 연속성 유지</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 실시간 알림 채널 구성 */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Bell className="h-6 w-6 text-orange-500 mr-2" />
                🔔 실시간 알림 채널 구성
              </h3>
              
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3 text-orange-700">알림 우선순위 시스템</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border-l-4 border-red-500 p-3 bg-red-50 rounded-r-lg">
                    <div className="font-medium text-red-700">🔴 긴급 (즉시 대응)</div>
                    <ul className="text-sm text-gray-700 mt-2 space-y-1">
                      <li>• VIP 고객 문의 접수</li>
                      <li>• 계약 관련 급박한 이슈</li>
                      <li>• 이탈 위험 고객 감지</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-yellow-500 p-3 bg-yellow-50 rounded-r-lg">
                    <div className="font-medium text-yellow-700">🟡 중요 (1시간 내 대응)</div>
                    <ul className="text-sm text-gray-700 mt-2 space-y-1">
                      <li>• 일반 고객 첫 문의</li>
                      <li>• 예약된 상담 알림</li>
                      <li>• 직원 성과 목표 미달</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-blue-500 p-3 bg-blue-50 rounded-r-lg">
                    <div className="font-medium text-blue-700">🔵 일반 (당일 대응)</div>
                    <ul className="text-sm text-gray-700 mt-2 space-y-1">
                      <li>• 신규 매물 등록</li>
                      <li>• 관심 매물 가격 변동</li>
                      <li>• 일일 업무 요약 리포트</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-gray-700">알림 전달 채널</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">1</div>
                      <div>
                        <p className="font-medium">슬랙 메시지</p>
                        <p className="text-sm text-gray-600">관리자 및 담당 직원에게 슬랙 DM 또는 채널 알림 전송</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">2</div>
                      <div>
                        <p className="font-medium">모바일 푸시</p>
                        <p className="text-sm text-gray-600">긴급 알림의 경우 모바일 푸시 알림으로 즉시 전달</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">3</div>
                      <div>
                        <p className="font-medium">이메일 다이제스트</p>
                        <p className="text-sm text-gray-600">일반 알림은 일일 또는 주간 다이제스트 형태로 이메일 발송</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-gray-700">알림 자동화 효과</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="font-medium">고객 응대 속도</span>
                      <span className="font-bold text-green-600">74% 향상</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="font-medium">이탈 고객 감소</span>
                      <span className="font-bold text-green-600">31% 감소</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="font-medium">VIP 고객 만족도</span>
                      <span className="font-bold text-green-600">92% 달성</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="font-medium">업무 누락 방지</span>
                      <span className="font-bold text-green-600">99% 방지</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 직원 데이터 보호 보안 시스템 */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
                🔒 직원 데이터 보호 보안 시스템
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-red-700 border-b pb-2">핵심 보안 기능</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="h-6 w-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</div>
                      <div>
                        <p className="font-medium">고급 접근 제어</p>
                        <p className="text-sm text-gray-600">직급 및 업무별 차등화된 권한 설정으로 민감 정보 보호</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="h-6 w-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</div>
                      <div>
                        <p className="font-medium">활동 로그 추적</p>
                        <p className="text-sm text-gray-600">모든 데이터 접근 및 변경 이력 자동 기록 및 관리자 알림</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="h-6 w-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</div>
                      <div>
                        <p className="font-medium">접근 로그 관리</p>
                        <p className="text-sm text-gray-600">직원별 주요 데이터 접근 내역 기록 및 주간 리포트 제공</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="h-6 w-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">4</div>
                      <div>
                        <p className="font-medium">이상 행동 감지</p>
                        <p className="text-sm text-gray-600">비정상 접근 패턴 감지 및 알림</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="border p-4 rounded-lg bg-red-50">
                  <h4 className="font-semibold text-lg mb-3 text-red-700">데이터 유출 방지 시스템</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="font-medium mb-1">대량 다운로드 제한</div>
                      <div className="bg-gray-200 h-2 rounded-full">
                        <div className="bg-red-500 h-2 rounded-full" style={{width: '95%'}}></div>
                      </div>
                      <div className="flex justify-between text-xs mt-1">
                        <span>보호 수준</span>
                        <span className="font-medium">95%</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="font-medium mb-1">외부 전송 필터링</div>
                      <div className="bg-gray-200 h-2 rounded-full">
                        <div className="bg-red-500 h-2 rounded-full" style={{width: '98%'}}></div>
                      </div>
                      <div className="flex justify-between text-xs mt-1">
                        <span>보호 수준</span>
                        <span className="font-medium">98%</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="font-medium mb-1">민감정보 마스킹</div>
                      <div className="bg-gray-200 h-2 rounded-full">
                        <div className="bg-red-500 h-2 rounded-full" style={{width: '100%'}}></div>
                      </div>
                      <div className="flex justify-between text-xs mt-1">
                        <span>보호 수준</span>
                        <span className="font-medium">100%</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-3 bg-white rounded-lg border border-red-200">
                      <p className="text-sm text-red-800 font-medium">📊 워터마크 기능</p>
                      <p className="text-xs text-gray-700 mt-1">
                        • 출력 및 화면 캡처 시 워터마크 자동 적용<br />
                        • 개인 식별 정보 포함으로 유출 경로 추적 가능<br />
                        • 워터마크 제거 방지 기술 적용
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border">
                <h4 className="font-semibold text-lg mb-3 text-gray-700">보안 교육 및 관리</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium flex-shrink-0">1</div>
                    <div>
                      <p className="font-medium">직원 보안 교육 프로그램</p>
                      <p className="text-sm text-gray-600">분기별 1회 의무 교육 및 월간 보안 뉴스레터 발송</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium flex-shrink-0">2</div>
                    <div>
                      <p className="font-medium">정기 보안 점검</p>
                      <p className="text-sm text-gray-600">월간 취약점 검사 및 분기별 모의해킹을 통한 보안 강화</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium flex-shrink-0">3</div>
                    <div>
                      <p className="font-medium">인증 정책 강화</p>
                      <p className="text-sm text-gray-600">2단계 인증 및 생체인식 도입으로 무단 접근 차단</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium flex-shrink-0">4</div>
                    <div>
                      <p className="font-medium">데이터 백업 정책</p>
                      <p className="text-sm text-gray-600">자동 백업 및 데이터 복구 훈련으로 사고 대응력 향상</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 효율 개선 방안 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <TrendingUp className="h-6 w-6 text-green-500 mr-2" />
                효율 개선 방안
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2 text-blue-700">1. 채널톡 응대 자동화</h4>
                  <p className="text-gray-600 mb-3">고객 유입 응대 채널 통합 및 자동 응답 시스템</p>
                  <ul className="text-sm space-y-1">
                    <li>• 24시간 자동 응답으로 고객 만족도 향상</li>
                    <li>• 문의 유형별 자동 분류 및 담당자 배정</li>
                    <li>• 매물 정보 자동 제공 및 상담 예약 연동</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2 text-green-700">2. 슬랙 알림 자동화</h4>
                  <p className="text-gray-600 mb-3">관리자 알림 자동화 봇 세팅</p>
                  <ul className="text-sm space-y-1">
                    <li>• 신규 문의 실시간 알림</li>
                    <li>• 계약 진행 상황 모니터링</li>
                    <li>• 직원 성과 지표 자동 리포트</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2 text-orange-700">3. 네이버 부동산 자동 수집</h4>
                  <p className="text-gray-600 mb-3">매물 정보 자동 크롤링 및 데이터베이스 구축</p>
                  <ul className="text-sm space-y-1">
                    <li>• 시세 정보 실시간 업데이트</li>
                    <li>• 경쟁 매물 분석 자동화</li>
                    <li>• 신규 매물 발굴 및 알림</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-lg mb-2 text-purple-700">4. 관련 뉴스 자동 수집</h4>
                  <p className="text-gray-600 mb-3">부동산 시장 동향 및 정책 뉴스 자동 수집</p>
                  <ul className="text-sm space-y-1">
                    <li>• 정책 변화 실시간 모니터링</li>
                    <li>• 지역별 시장 동향 분석</li>
                    <li>• 투자 기회 발굴을 위한 정보 제공</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 자동화 도입 효과 및 ROI */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <DollarSign className="h-5 w-5 text-green-500 mr-2" />
                자동화 도입 효과 및 ROI
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-700 mb-3">🎯 직원의 영업 집중도 향상</h4>
                  <ul className="text-sm space-y-2">
                    <li>• <strong>반복 업무 자동화:</strong> 문의 응답, 매물 정보 제공 등 80% 자동화</li>
                    <li>• <strong>영업 시간 확보:</strong> 일일 3-4시간 추가 영업 활동 가능</li>
                    <li>• <strong>고부가가치 업무 집중:</strong> 고객 상담, 계약 협상에 100% 집중</li>
                    <li>• <strong>스트레스 감소:</strong> 단순 반복 업무 제거로 직원 만족도 향상</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-700 mb-3">📊 직원 상태 트래킹 최적화</h4>
                  <ul className="text-sm space-y-2">
                    <li>• <strong>실시간 성과 모니터링:</strong> 문의, 상담, 계약 현황 실시간 파악</li>
                    <li>• <strong>자동 알림 시스템:</strong> 목표 달성률, 고객 이탈 위험 자동 감지</li>
                    <li>• <strong>데이터 기반 관리:</strong> 객관적 지표로 공정한 평가 및 코칭</li>
                    <li>• <strong>업무 효율성 분석:</strong> 채널별, 시간대별 성과 분석으로 최적화</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600">80%</div>
                  <div className="text-sm text-gray-600">업무 자동화율</div>
                  <div className="text-xs text-gray-500 mt-1">반복업무 → 영업집중</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-600">3-4시간</div>
                  <div className="text-sm text-gray-600">일일 영업시간 증가</div>
                  <div className="text-xs text-gray-500 mt-1">순수 영업 활동</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600">실시간</div>
                  <div className="text-sm text-gray-600">직원 상태 트래킹</div>
                  <div className="text-xs text-gray-500 mt-1">성과 & 이탈위험 감지</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="text-2xl font-bold text-orange-600">24/7</div>
                  <div className="text-sm text-gray-600">고객 응대 가능</div>
                  <div className="text-xs text-gray-500 mt-1">만족도 95% 향상</div>
                </div>
              </div>
            </div>

            {/* 도입 일정 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Clock className="h-5 w-5 text-blue-500 mr-2" />
                단계별 도입 계획 (총 6주)
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div className="flex-1">
                    <div className="font-medium">1-2주차: 유입채널 통합</div>
                    <div className="text-sm text-gray-600">채널톡, 네이버톡톡, 카카오톡 연동 + 자동응답 설정</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div className="flex-1">
                    <div className="font-medium">3-4주차: 슬랙 통합 대시보드</div>
                    <div className="text-sm text-gray-600">관리자 알림 봇 + 직원 상태 트래킹 시스템</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div className="flex-1">
                    <div className="font-medium">5주차: 매물 크롤링 + 뉴스 수집</div>
                    <div className="text-sm text-gray-600">네이버 부동산 자동 수집 + 시장 동향 뉴스 자동화</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div className="flex-1">
                    <div className="font-medium">6주차: 통합 테스트 및 최종 배포</div>
                    <div className="text-sm text-gray-600">전체 시스템 통합 테스트 + 직원 교육 + 실서비스 적용</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h4 className="font-medium mb-2 text-yellow-800">👨‍💼 전담 PM 지원</h4>
                <p className="text-sm text-yellow-700">
                  <strong>하상현 PM이 매주 2회 상주</strong>하여 프로세스 효율 세팅을 직접 진행합니다.
                  <br />• 실시간 이슈 대응 및 직원 교육 병행
                  <br />• 각 단계별 완료 후 성과 측정 및 피드백 반영
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default RealEstateDashboard;